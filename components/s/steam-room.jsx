import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ogfq-i5hx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15h19m-19 3h19M5 18v3.5M19 18v3.5M7 12c-1.25-1.5 1.25-3 0-4.5s1.25-3 0-4.5m5 9c-1.25-1.5 1.25-3 0-4.5s1.25-3 0-4.5m5 9c-1.25-1.5 1.25-3 0-4.5s1.25-3 0-4.5");
}
</style><path class="ogfq-i5hx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:steam-room"} {...others} />);
}

export default Component;
