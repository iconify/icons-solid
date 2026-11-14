import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.goiiwhh-b {
  d: path("m5 7l.75.75L7.25 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j1m43ki5i {
  d: path("M3.5 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m0 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M12 7h9m-9 10h9");
}
</style><g class="hntgybcog"><path class="j1m43ki5i"/><path class="goiiwhh-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:quiz-multiple-choice"} {...others} />);
}

export default Component;
