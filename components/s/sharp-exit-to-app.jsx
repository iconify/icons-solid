import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fmvky-vuf {
  fill: currentColor;
  d: path("M10.09 15.59L11.5 17l5-5l-5-5l-1.41 1.41L12.67 11H3v2h9.67zM21 3H3v6h2V5h14v14H5v-4H3v6h18z");
}
</style><path class="fmvky-vuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-exit-to-app"} {...others} />);
}

export default Component;
