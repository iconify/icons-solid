import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bqqupqbfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c1.75 1.75 2.5 3 2.5 4a2.5 2.5 0 0 1-5 0c0-1 .75-2.25 2.5-4Zm-3 9h6V19H9Zm-4 10h14");
}
</style><path class="bqqupqbfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:power-cut-candle"} {...others} />);
}

export default Component;
