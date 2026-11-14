import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s04-r6rxm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15h6l2 4l2-4h9M17 15V9h4.5M9 12c-1.5-2.5 1.5-4.5 0-7.5m3.5 7.5c-1.5-2.5 1.5-4.5 0-7.5");
}
</style><path class="s04-r6rxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:geothermal"} {...others} />);
}

export default Component;
