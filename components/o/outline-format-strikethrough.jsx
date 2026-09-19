import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uj8dkh-iv {
  fill: currentColor;
  d: path("M10 19h4v-3h-4zM5 4v3h5v3h4V7h5V4zM3 14h18v-2H3z");
}
</style><path class="uj8dkh-iv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-format-strikethrough"} {...others} />);
}

export default Component;
