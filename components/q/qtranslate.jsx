import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fx6m5wb8y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.891 10.108c1.303 11.998 7.015 16.062 17.288 19.128m-5.405-19.128C21.471 22.107 15.76 26.17 5.486 29.237M16.833 5.93v4.14m-11.5 0h23m11.885 24.3h-9.972m12.421 7.7l-7.322-23.017m-7.639 22.949l7.639-22.949");
}
</style><path class="fx6m5wb8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:qtranslate"} {...others} />);
}

export default Component;
