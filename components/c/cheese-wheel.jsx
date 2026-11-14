import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e_-_jdb5z {
  d: path("M12 9h8.5a8.5 3.5 0 1 0-5.5 3.25Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qmdwc8miz {
  d: path("M3.5 9v6A8.5 3.5 0 0 0 15 18.25v-6");
}

.u80ssxhzl {
  d: path("M20.5 9v6H12V9m0 6l3 3.25");
}
</style><g class="hntgybcog"><path class="e_-_jdb5z"/><path class="qmdwc8miz"/><path class="u80ssxhzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cheese-wheel"} {...others} />);
}

export default Component;
