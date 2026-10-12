import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft6epebfu {
  d: path("m15.5 13l3.75-3.75L15.5 5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r-m55rnhv {
  d: path("M4.25 19.75v-8a2.5 2.5 0 0 1 2.5-2.5h12.5");
}
</style><g class="hntgybcog"><path class="r-m55rnhv"/><path class="ft6epebfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:corner-up-right"} {...others} />);
}

export default Component;
