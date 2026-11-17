import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dupw51nrp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 9h14v12H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.v7oszcbpv {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 9h14v12H3Zm0 0l6 6h2l6-6M7 5V3h14v12");
}
</style><g class="ft5dv1b6b"><path class="dupw51nrp"/><path class="v7oszcbpv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mails-duotone-sharp"} {...others} />);
}

export default Component;
