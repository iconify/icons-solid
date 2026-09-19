import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rk0r5pbjb {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zM8.19 12c2.04-1.35 3.5-3.94 3.76-7h.09c.26 3.06 1.72 5.65 3.76 7c-2.04 1.35-3.5 3.94-3.76 7h-.09c-.26-3.06-1.72-5.65-3.76-7");
}
</style><path class="rk0r5pbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-curtains"} {...others} />);
}

export default Component;
