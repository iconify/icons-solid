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

.pnu4jvbcb {
  d: path("m13 4 8 8 -8 8");
}

.te2cn0btr {
  d: path("m4 4 8 8 -8 8");
}
</style><g class="hntgybcog"><path class="te2cn0btr"/><path class="pnu4jvbcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:chevrons-right-outline-thin"} {...others} />);
}

export default Component;
