import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j2or2hbsx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 13c0-2.75 2.5-4.5 6.5-4.5s6.5 1.75 6.5 4.5Zm.5 0h12l-1.5 8h-9Zm4 0l.5 8m3.5-8l-.5 8M12 8.5V6m0-2.75h.01");
}
</style><path class="j2or2hbsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cupcake-candle"} {...others} />);
}

export default Component;
