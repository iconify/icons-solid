import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aqh1fxw_d {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8c0-.64.36-1.36 1-2l2-2c.64-.64 1.36-1 2-1h7a2 2 0 0 1 2 2zm-9-5v3m3-3v3m3-3v3");
}

.ft5dv1b6b {
  fill: none;
}

.ua60p4nfn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8c0-.763.48-1.479 1-2l2-2c.521-.52 1.237-1 2-1h7a2 2 0 0 1 2 2Z");
}
</style><g class="ft5dv1b6b"><path class="ua60p4nfn"/><path class="aqh1fxw_d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sd-card-duotone"} {...others} />);
}

export default Component;
