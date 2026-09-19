import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ldwveewxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.922 19.649a21.505 21.505 0 0 1 42.156.192m-.076 8.66a21.495 21.495 0 0 1-42.08-.192");
}

.zmbiiacbf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.922 19.649h11.86v-5.1l9.43 9.43l-9.43 9.43v-5.1H2.922m42.08.191H33.326l-.18 4.95l-9.01-9.54l9.16-9.34v5.27H45.08");
}
</style><path class="zmbiiacbf"/><path class="ldwveewxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:freetrailer"} {...others} />);
}

export default Component;
