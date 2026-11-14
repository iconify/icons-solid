import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q2d5x0bgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 12.5V5.25a2.75 2.75 0 0 1 5.5 0v7.25a4.5 4.5 0 1 1-5.5 0ZM8 7v9m8.5 4.5q-1.25-1.75 0-3.5t0-3.5m3.5 7q-1.25-1.75 0-3.5t0-3.5");
}
</style><path class="q2d5x0bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:measure-temperature"} {...others} />);
}

export default Component;
