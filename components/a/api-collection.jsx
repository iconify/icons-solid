import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bv_wmcbol {
  d: path("M2.5 6.5a2 2 0 0 1 2-2h5l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pw_3bf7pv {
  d: path("M7.25 11.5h1.5a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 8.75 17h-1.5a1.75 1.75 0 0 1-1.75-1.75v-2a1.75 1.75 0 0 1 1.75-1.75m7.75 0h1.5a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 16.5 17H15a1.75 1.75 0 0 1-1.75-1.75v-2A1.75 1.75 0 0 1 15 11.5m-9.5 2.25h5m2.75 0h5");
}
</style><g class="hntgybcog"><path class="bv_wmcbol"/><path class="pw_3bf7pv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:api-collection"} {...others} />);
}

export default Component;
