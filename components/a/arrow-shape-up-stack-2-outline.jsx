import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vfgrnr3hr {
  fill: currentColor;
  d: path("M9 23v-3H4l8-9l8 9h-5v3zm2-2h2v-3h2.55L12 14l-3.55 4H11zm-7-6l8-9l8 9h-2.675L12 9l-5.325 6zm0-5l8-9l8 9h-2.675L12 4l-5.325 6zm8 8");
}
</style><path class="vfgrnr3hr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-shape-up-stack-2-outline"} {...others} />);
}

export default Component;
