import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vbwq-rewr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 6.5h2.5V18a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V6.5H22M12 9.75v7m3.031-5.25L8.969 15m6.062 0l-6.062-3.5");
}
</style><path class="vbwq-rewr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cold-chain-box"} {...others} />);
}

export default Component;
