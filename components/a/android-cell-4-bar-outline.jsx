import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t0j19b4km {
  fill: currentColor;
  d: path("M1.5 20v-8h3v8zm6 0V9.5h3V20zm6 0V7h3v13zm6 0V4h3v16z");
}
</style><path class="t0j19b4km"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:android-cell-4-bar-outline"} {...others} />);
}

export default Component;
