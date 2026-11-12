import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fhtkvnjef {
  stroke-opacity: 0.4;
  d: path("M6 12h12m-6-6v12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wy01nzbdr {
  d: path("M3 3h.01M9 3h.01M15 3h.01M21 3h-.01M21 9h-.01m.01 6h-.01m.01 6h-.01M15 21h.01M9 21h.01M3 21h.01M3 15h.01M3 9h.01");
}
</style><g class="nrj6p8qat"><path class="fhtkvnjef"/><path class="wy01nzbdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:border-inner-duocolor"} {...others} />);
}

export default Component;
