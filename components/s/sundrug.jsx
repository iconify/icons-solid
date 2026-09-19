import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a2k3lob4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 5.4c-10.272 0-18.6 8.328-18.6 18.6H8.5v18.6c10.272 0 18.6-8.327 18.6-18.6h12.4z");
}

.fyeffcixn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 24c0-10.272 8.328-18.6 18.6-18.6v4.737");
}

.i9o4z6bah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 24c0 10.272-8.327 18.6-18.6 18.6v-4.737");
}
</style><path class="fyeffcixn"/><path class="a2k3lob4a"/><path class="i9o4z6bah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sundrug"} {...others} />);
}

export default Component;
