import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hmr_fbl2a {
  d: path("M13.5 2.75a7.75 7.75 0 0 1 7.75 7.75H13.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ky05amz3v {
  d: path("M10.5 5.75a7.75 7.75 0 1 0 7.75 7.75H10.5Z");
}
</style><g class="hntgybcog"><path class="ky05amz3v"/><path class="hmr_fbl2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chart-pie-exploded"} {...others} />);
}

export default Component;
