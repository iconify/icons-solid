import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.x2eryybfy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.027 9.66a8.485 8.485 0 0 0 16.97 0M10.124 41.766A8.485 8.485 0 0 0 4.5 27.29M37.876 8.238A8.485 8.485 0 0 0 43.5 22.714m-26.382 8.262a6.91 6.91 0 0 0 12.883-3.474V13.304m-11.313-7.07h12.618M4.5 22.713h12.618m2.549 16.807h10.334m6.907-15.284V34.57");
}
</style><path class="x2eryybfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:jelbi"} {...others} />);
}

export default Component;
