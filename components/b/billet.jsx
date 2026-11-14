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

.u7n-gewij {
  d: path("M3 12h6.5l11-7m-11 7v6.5");
}

.ua36h_b_w {
  d: path("m3 12l11-7h6.5v6.5l-11 7H3Z");
}
</style><g class="hntgybcog"><path class="ua36h_b_w"/><path class="u7n-gewij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:billet"} {...others} />);
}

export default Component;
