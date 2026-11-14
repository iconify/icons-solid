import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vvzb-bbtg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 9h7.5a5.75 5.75 0 0 1 5.75 5.75a5.75 5.75 0 0 1-5.75 5.75h-7.5a5.75 5.75 0 0 1-5.75-5.75A5.75 5.75 0 0 1 8.25 9M6.5 9a5.5 5.5 0 0 1 11 0m-11 0v11.5M17.5 9v11.5");
}
</style><path class="vvzb-bbtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sports-bag"} {...others} />);
}

export default Component;
