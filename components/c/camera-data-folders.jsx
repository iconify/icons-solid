import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.smcs7pbqo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.46 33.75h11.58A3.96 3.96 0 0 0 24 29.79V18.21a3.96 3.96 0 0 0-3.96-3.96H8.46a3.96 3.96 0 0 0-3.96 3.96v11.58a3.96 3.96 0 0 0 3.96 3.96m19.455-19.5H43.5v3.899H27.915zm0 15.601H43.5v3.899H27.915zm0-7.801H43.5v3.899H27.915z");
}

.xf9ltsbhu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.17 29.9H7.38l3.55-5.82l2.36 3.884l3.38-5.794z");
}
</style><path class="smcs7pbqo"/><path class="xf9ltsbhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:camera-data-folders"} {...others} />);
}

export default Component;
