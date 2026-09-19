import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bzl-r5b-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 42.5C5.5 32.283 13.783 24 24 24s18.5-8.283 18.5-18.5");
}

.j5igqi6wt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 5.5C32.283 5.5 24 13.783 24 24M5.5 42.5C15.717 42.5 24 34.217 24 24");
}

.xky2mmbxr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 5.5c0 20.435-16.565 37-37 37c0-20.435 16.565-37 37-37");
}
</style><path class="j5igqi6wt"/><path class="xky2mmbxr"/><path class="bzl-r5b-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:photo-curves"} {...others} />);
}

export default Component;
