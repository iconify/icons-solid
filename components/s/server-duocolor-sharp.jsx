import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fpz647bra {
  d: path("M3 4h18v6H3Zm0 10h18v6H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xzdh7zb9w {
  stroke-opacity: 0.4;
  d: path("M7 7h.01M7 17h.01");
}
</style><g class="nrj6p8qat"><path class="xzdh7zb9w"/><path class="fpz647bra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:server-duocolor-sharp"} {...others} />);
}

export default Component;
