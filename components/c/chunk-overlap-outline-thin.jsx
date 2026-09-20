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

.j6xe62btt {
  d: path("M8 15.5a2.5 2.5 0 0 1 2.5 -2.5h8a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-8A2.5 2.5 0 0 1 8 15.5");
}

.jw0risdcq {
  d: path("M3 7.5A2.5 2.5 0 0 1 5.5 5h8A2.5 2.5 0 0 1 16 7.5a2.5 2.5 0 0 1 -2.5 2.5h-8A2.5 2.5 0 0 1 3 7.5");
}
</style><g class="hntgybcog"><path class="jw0risdcq"/><path class="j6xe62btt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:chunk-overlap-outline-thin"} {...others} />);
}

export default Component;
