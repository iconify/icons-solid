import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lm69f68vr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.418 5.5L8.185 29.191H21.1l1.55-2.495M20.582 42.5l19.233-23.691H26.9l-1.55 2.495");
}
</style><path class="lm69f68vr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:xiaoheihe-accelerator"} {...others} />);
}

export default Component;
