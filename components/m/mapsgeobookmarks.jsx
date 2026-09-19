import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.luoxmp8hy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5a13.1 13.1 0 0 0-13.101 13.101c0 10.253 10.002 22.591 12.623 25.622a.81.81 0 0 0 1.139.08l.08-.08C27.327 40.18 37.1 27.854 37.1 17.6A13.1 13.1 0 0 0 24 4.5m0 16.656a4.443 4.443 0 1 1 4.443-4.443v.011A4.443 4.443 0 0 1 24 21.156");
}
</style><path class="luoxmp8hy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mapsgeobookmarks"} {...others} />);
}

export default Component;
