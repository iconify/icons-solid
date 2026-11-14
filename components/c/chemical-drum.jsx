import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dal0q1bok {
  d: path("M5 4v16a7 1.5 0 0 0 14 0V4M5 8.25h14m-14 9.5h14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lb2b-6j3c {
  d: path("m13.061 11.811l.128.128a1.5 1.5 0 0 1 0 2.122l-.128.128a1.5 1.5 0 0 1-2.122 0l-.128-.128a1.5 1.5 0 0 1 0-2.122l.128-.128a1.5 1.5 0 0 1 2.122 0");
}

.suf2nacue {
  d: path("M5 4a7 1.5 0 1 0 14 0A7 1.5 0 1 0 5 4");
}
</style><g class="hntgybcog"><path class="suf2nacue"/><path class="dal0q1bok"/><path class="lb2b-6j3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chemical-drum"} {...others} />);
}

export default Component;
