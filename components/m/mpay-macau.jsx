import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.nuoahgbth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.787 42.5h10.354l5.914-36.362H11.7zm20.079-37l-4.238 26.039M31.845 5.582L27.326 33.36M37.391 8.256L33.444 32.59m8.769-17.153L40.287 27.3");
}
</style><path class="nuoahgbth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mpay-macau"} {...others} />);
}

export default Component;
