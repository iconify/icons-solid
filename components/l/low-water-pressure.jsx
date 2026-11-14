import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o38t_abhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 4h8a4 4 0 0 1 4 4v2h-3V8a1 1 0 0 0-1-1h-8ZM10 4V2M7.75 2h4.5M16 13v8.5m-2.75-2.75L16 21.5l2.75-2.75");
}
</style><path class="o38t_abhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:low-water-pressure"} {...others} />);
}

export default Component;
