import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gxaeo6b4y {
  d: path("m2.5 20.5l7-16l4 8c2-1.25 4.75-.25 5 2c1.75 0 3 1.25 3 3s-1.25 3-3 3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s4pazkb-h {
  d: path("M12 17.5c.75-1.75 2.5-2.5 4.5-2");
}
</style><g class="hntgybcog"><path class="gxaeo6b4y"/><path class="s4pazkb-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:avalanche"} {...others} />);
}

export default Component;
