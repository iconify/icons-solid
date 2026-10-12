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

.kxq9ww4ym {
  width: 16.5px;
  height: 16.5px;
  x: 3.75px;
  y: 3.75px;
  rx: 2.5px;
}

.pe_he5bnp {
  d: path("M8.25 16.25v-4.5m7.5 4.5v-6.5M12 16.25v-8.5");
}
</style><g class="hntgybcog"><rect class="kxq9ww4ym"/><path class="pe_he5bnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:poll"} {...others} />);
}

export default Component;
