import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cl40lr7bh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 44.5l6.15-12.458l13.751-1.997l-9.945-9.704L36.3 6.643L24 13.109L11.7 6.643l2.355 13.698l-9.956 9.704l13.751 1.997zm-4.3-22.487h8.6m-8.6 4.815h8.6");
}

.j1m9jbcfi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 3.5l6.15 12.458l13.751 1.997l-9.945 9.704L36.3 41.357L24 34.891l-12.3 6.466l2.355-13.698l-9.956-9.704l13.751-1.997z");
}
</style><path class="j1m9jbcfi"/><path class="cl40lr7bh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:wolframalpha-classic"} {...others} />);
}

export default Component;
