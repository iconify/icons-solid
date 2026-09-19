import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vm2d60b4v {
  fill: currentColor;
  d: path("m18 12l4-4l-4-4v3H3v2h15zM6 12l-4 4l4 4v-3h15v-2H6z");
}
</style><path class="vm2d60b4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-sync-alt"} {...others} />);
}

export default Component;
