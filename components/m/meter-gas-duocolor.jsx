import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jx-a7achz {
  stroke-opacity: 0.4;
  d: path("M12 6.6c.3 1.5 1.2 2.7 2.4 3.6c.9.9 1.2 2.1 1.2 3.6a3.6 3.6 0 1 1-7.2 0c0-.9.3-1.5.6-1.8a1.2 1.2 0 0 0 2.4 0c0-.9-.3-1.2-.6-1.8c-.6-1.2-.3-2.4 1.2-3.6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.svp4ssntn {
  d: path("M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Zm-2 7h2m14 0h2");
}
</style><g class="nrj6p8qat"><path class="jx-a7achz"/><path class="svp4ssntn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:meter-gas-duocolor"} {...others} />);
}

export default Component;
