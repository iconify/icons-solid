import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.b36heqsfx {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h3.5a1 1 0 1 1 0 2H6a1 1 0 0 0-1 1v3.5a1 1 0 1 1-2 0zm14.5-2a1 1 0 0 1 1-1H22a3 3 0 0 1 3 3v3.5a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-3.5a1 1 0 0 1-1-1M4 17.5a1 1 0 0 1 1 1V22a1 1 0 0 0 1 1h3.5a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3v-3.5a1 1 0 0 1 1-1m20 0a1 1 0 0 1 1 1V22a3 3 0 0 1-3 3h-3.5a1 1 0 1 1 0-2H22a1 1 0 0 0 1-1v-3.5a1 1 0 0 1 1-1");
}
</style><path class="b36heqsfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:full-screen-maximize-28-filled"} {...others} />);
}

export default Component;
