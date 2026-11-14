import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fvlyeilkq {
  d: path("M11.5 16.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0M7 7.5h10M2.75 15Q7 16.5 6 21.25m10.5-4.75h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kaw7ibbdn {
  d: path("M7 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.pjz6otr4j {
  d: path("M2.5 16.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}
</style><g class="hntgybcog"><path class="kaw7ibbdn"/><path class="pjz6otr4j"/><path class="fvlyeilkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sports-balls"} {...others} />);
}

export default Component;
