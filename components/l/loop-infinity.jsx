import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ln5rwnb5y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.269 28.202l-1.517 1.709a8.352 8.352 0 1 1 0-11.822l10.496 11.822a8.352 8.352 0 1 0 0-11.822l-1.517 1.709");
}
</style><path class="ln5rwnb5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:loop-infinity"} {...others} />);
}

export default Component;
