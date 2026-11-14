import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h9p_uac7a {
  d: path("M4 17V9c0-2.5 2-4 4-4h8c2 0 4 1.5 4 4v8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ipqviubhm {
  d: path("M6.5 12h11a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 14.5A2.5 2.5 0 0 1 6.5 12M6 20.5V17m12 3.5V17");
}
</style><g class="hntgybcog"><path class="h9p_uac7a"/><path class="ipqviubhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:booth-seating"} {...others} />);
}

export default Component;
