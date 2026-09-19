import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lsvacdcrw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.1 35.1h7.4v7.4h-7.4zm-29.6 0h7.4v7.4H5.5z");
}

.xfriufe_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 27.7V12.9h-7.4v7.4h-7.4v-7.4h7.4V5.5H12.9v7.4h7.4v7.4h-7.4v-7.4H5.5v14.8h7.4v7.4h7.4v7.4h7.4v-7.4h7.4v-7.4z");
}
</style><path class="lsvacdcrw"/><path class="xfriufe_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:identiconizer"} {...others} />);
}

export default Component;
