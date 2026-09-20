import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d8i3t0b_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.056 24.045h21.852m3.325-15.457v30.854M42.5 13.9v20.2M9.74 8.558v30.615M5.5 13.96v20.2");
}
</style><path class="d8i3t0b_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:librefit"} {...others} />);
}

export default Component;
