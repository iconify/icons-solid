import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t-7b0qo6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5h19m-13 0v-15a2 2 0 0 1 4 0v15m-4-6h-3V10m7 2h3V8m0 12.5c0-3 1.25-4.25 2.75-4.25S21 17.5 21 20.5");
}
</style><path class="t-7b0qo6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:xeriscape"} {...others} />);
}

export default Component;
