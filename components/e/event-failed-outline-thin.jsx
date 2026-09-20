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

.qydoy8byr {
  d: path("m19 10 -5 5");
}

.v-jogvb5z {
  d: path("m10 6 -5 5h4l-5 5");
}

.weeetziwb {
  d: path("m14 10 5 5");
}
</style><g class="hntgybcog"><path class="v-jogvb5z"/><path class="weeetziwb"/><path class="qydoy8byr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:event-failed-outline-thin"} {...others} />);
}

export default Component;
