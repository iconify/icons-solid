import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jdgrh3byr {
  d: path("M2.5 13Q13 13 21 9q-3.25 8-8 10H2.5");
}

.maifqw57t {
  d: path("M12 12.5V6h6.25Q21 6 21 9");
}
</style><g class="hntgybcog"><path class="jdgrh3byr"/><path class="maifqw57t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bow-pulpit"} {...others} />);
}

export default Component;
