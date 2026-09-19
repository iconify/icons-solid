import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hytqwfc5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.19 27.082a5.18 5.18 0 0 1 5.045-5.24a5.215 5.215 0 0 1 3.687 8.928c-2.134 1.747-8.733 6.793-8.733 6.793h10.286m11.395 0V22.037l-8.345 10.48h10.286M7.903 17.547h32.194");
}

.r2b25xbtl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5L5.879 17.547h2.024V43.5h32.194V17.547h2.024Z");
}
</style><path class="r2b25xbtl"/><path class="hytqwfc5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:immoscout24"} {...others} />);
}

export default Component;
