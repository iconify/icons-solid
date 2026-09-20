import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f2fbp5q8r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.521 25.696a6.813 6.813 0 0 1-6.813 6.813a6.813 6.813 0 0 1-6.813-6.813a6.813 6.813 0 0 1 6.813-6.813a6.813 6.813 0 0 1 6.813 6.813m0 0V4.5l10.945 4.024");
}

.os137tbqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m41.929 25.25l.001.226C41.93 35.431 33.903 43.5 24 43.5S6.07 35.43 6.07 25.476c0-8.09 5.357-15.161 13.056-17.345");
}
</style><path class="f2fbp5q8r"/><path class="os137tbqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:echo-eq"} {...others} />);
}

export default Component;
