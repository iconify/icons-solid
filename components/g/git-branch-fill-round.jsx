import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_weskb6e {
  fill: currentColor;
  d: path("M6 8.829v3.17c.867-.65 1.917-1 3-.999h6a3.01 3.01 0 0 0 2.896-2.21a3 3 0 1 1 2.032.064A5.01 5.01 0 0 1 15 13H9a3.01 3.01 0 0 0-2.896 2.21A3 3 0 1 1 4 15.171V8.829a3 3 0 1 1 2 0");
}
</style><path class="g_weskb6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-branch-fill-round"} {...others} />);
}

export default Component;
