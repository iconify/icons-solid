import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.deo_w_prh {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 10h16v11H4Z");
}

.ft5dv1b6b {
  fill: none;
}

.ie05xbc1u {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 10h16v11H4Zm5 0V6a3 3 0 0 1 6 0");
}
</style><g class="ft5dv1b6b"><path class="deo_w_prh"/><path class="ie05xbc1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-open-duotone-sharp"} {...others} />);
}

export default Component;
