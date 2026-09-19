import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c59hirbvx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24.082a18.5 18.5 0 0 0 37 0Zm20.063 0a8.381 8.381 0 0 0-16.762 0");
}

.z8ujw6d6b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.2 24.082a8.382 8.382 0 0 0-15.207-4.866m-7.908-3.442c.63-4.775 12.333-13.82 21.02-8.966v2.045s-9.547.815-14.418 8.91");
}
</style><path class="c59hirbvx"/><path class="z8ujw6d6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ifruit"} {...others} />);
}

export default Component;
