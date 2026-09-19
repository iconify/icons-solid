import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cnjvksb4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.465 42.5c3.142-1.839 5.761-4.948 7.915-8.624m0 0c5.774-9.86 8.194-23.799 8.342-28.24c.004-.13.171-.186.247-.08c4.42 6.2 6.973 17.233 11.891 26.696c2.339 4.498 5.65 10.025 6.676 8.893m-6.676-8.893c-6.494-2.002-16.36.248-20.48 1.624");
}
</style><path class="cnjvksb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:appmanager-muntashirakon"} {...others} />);
}

export default Component;
