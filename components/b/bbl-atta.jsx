import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.oayoyeb0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.566 29.09a4 4 0 0 1-.97.119c-2.23 0-4.037-1.827-4.037-4.08s1.807-4.08 4.036-4.08c2.307 0 3.606 1.542 3.606 3.358v4.881m6.939 0h-.628a2.007 2.007 0 0 1-2.012-2.002v-8.962m.038 3.048h2.602m6.31 7.916h-.628a2.007 2.007 0 0 1-2.012-2.002v-8.962m.038 3.048h2.602m7.839 7.718a4 4 0 0 1-.97.119c-2.23 0-4.037-1.827-4.037-4.08s1.807-4.08 4.036-4.08c2.307 0 3.606 1.542 3.606 3.358v4.881M9.62 33.078H4.5V27.96m33.882-13.038H43.5v5.115");
}
</style><path class="oayoyeb0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bbl-atta"} {...others} />);
}

export default Component;
