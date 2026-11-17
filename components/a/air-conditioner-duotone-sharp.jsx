import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ff9pr3oyh {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h18v8H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.gl7x98iqq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h18v8H3Zm4 5h10m-9 7a3 3 0 0 1-3 3m11-3a3 3 0 0 0 3 3m-7-3v6");
}
</style><g class="ft5dv1b6b"><path class="ff9pr3oyh"/><path class="gl7x98iqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:air-conditioner-duotone-sharp"} {...others} />);
}

export default Component;
