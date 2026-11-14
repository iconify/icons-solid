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

.j7zdxsb9u {
  d: path("M12.5 3.5H7A3.5 3.5 0 0 0 3.5 7v10A3.5 3.5 0 0 0 7 20.5h10a3.5 3.5 0 0 0 3.5-3.5v-6");
}

.s6u2_13io {
  d: path("M18 3h1a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 8h-1a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 18 3");
}
</style><g class="hntgybcog"><path class="j7zdxsb9u"/><path class="s6u2_13io"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:notification-badge"} {...others} />);
}

export default Component;
