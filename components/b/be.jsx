import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bz-b2vb3d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.625 36.457a9.75 9.75 0 1 1 4.875-8.443m-19.498 0H43.5m-38.997-.001V10.235");
}

.qt4y26klm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.954 33.135c-2.828-4.583-1.406-10.59 3.176-13.418c4.583-2.828 10.59-1.406 13.418 3.176s1.407 10.589-3.175 13.417s-10.589 1.407-13.418-3.174");
}
</style><path class="qt4y26klm"/><path class="bz-b2vb3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:be"} {...others} />);
}

export default Component;
