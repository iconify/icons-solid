import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.db2cyynzf {
  d: path("m13 8l-2.75 5h3.5L11 18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xjynd28eq {
  d: path("M10.875 4.75h2.25A4.375 4.375 0 0 1 17.5 9.125v8a4.375 4.375 0 0 1-4.375 4.375h-2.25A4.375 4.375 0 0 1 6.5 17.125v-8a4.375 4.375 0 0 1 4.375-4.375m-.875-2h4");
}
</style><g class="hntgybcog"><path class="xjynd28eq"/><path class="db2cyynzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:battery-bolt"} {...others} />);
}

export default Component;
