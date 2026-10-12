import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hsxlr7ghc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 15.75c2-4.5 4.25-9 5.75-8c2 1.25-3.5 8-1.25 8.25c1.75.25 3-3.75 4.75-3.75c1.25 0 .5 2.5 2 2.5s2.5-2.25 4.5-2.25M3.75 20.25h16.5");
}
</style><path class="hsxlr7ghc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:signature"} {...others} />);
}

export default Component;
