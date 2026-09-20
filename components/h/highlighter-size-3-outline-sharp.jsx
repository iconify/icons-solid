import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.itmlnabso {
  fill: currentColor;
  d: path("m8.096 19.404l-3.525-3.525q-.14-.14-.14-.354t.14-.354l10.575-10.6q.166-.165.379-.165t.354.165l3.525 3.55q.14.14.14.354t-.14.354L8.829 19.404q-.165.165-.366.165t-.367-.165");
}
</style><path class="itmlnabso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:highlighter-size-3-outline-sharp"} {...others} />);
}

export default Component;
