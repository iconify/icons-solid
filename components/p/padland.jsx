import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hmgozgbuo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.75 42.5L5.5 30.366V5.5l9.25 12.134zm9.25 0l-9.25-12.134V5.5L24 17.634zm9.25 0L24 30.366V5.5l9.25 12.134zm9.25 0l-9.25-12.134V5.5l9.25 12.134z");
}
</style><path class="hmgozgbuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:padland"} {...others} />);
}

export default Component;
