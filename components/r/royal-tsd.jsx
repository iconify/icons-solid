import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h4w1-_bxv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.585 35.792l-7.323-18.72l12.955 8.039");
}

.lsr63y1xp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.262 16.595L11.585 35.792h25.528zm-13.026 7.893l-6.214-12.28l-12.437 23.584");
}
</style><path class="lsr63y1xp"/><path class="h4w1-_bxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:royal-tsd"} {...others} />);
}

export default Component;
