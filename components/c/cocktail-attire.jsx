import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dtskkch2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 4a1.5 1.5 0 1 1 1.5 1.5v1m0 0l-7 4h14Zm-3 4l.75 3.5L5 19.5h9L11.75 14l.75-3.5m5.035 4.75h1.43a.895.895 0 0 1 .66 1.5l-.269.294a1.5 1.5 0 0 1-2.212 0l-.269-.294a.895.895 0 0 1 .66-1.5m.715 3V21m-1.75 0H20");
}
</style><path class="dtskkch2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cocktail-attire"} {...others} />);
}

export default Component;
