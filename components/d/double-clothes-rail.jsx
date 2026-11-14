import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nh1v-mbts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5v19m19-19v19M2.5 3h19m-19 9.5h19M8.5 3c1 0 1 1.75 0 1.75m-3 .5h6L14 7.5l-1.25 1.25L12 8v2.75H5V8l-.75.75L3 7.5Zm10 7.25c1 0 1 1.75 0 1.75m-3 .5h6l2 6.75h-10Z");
}
</style><path class="nh1v-mbts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:double-clothes-rail"} {...others} />);
}

export default Component;
