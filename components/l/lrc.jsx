import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pohvsdqhp {
  fill: var(--svg-color--1f63ff, #1f63ff);
  d: path("M8.992 5.116v13.767L3 13.993zm.001 13.767l5.654-4.889l-1.644-2.582H21z");
}
</style><path class="pohvsdqhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:lrc"} {...others} />);
}

export default Component;
