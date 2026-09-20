import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fn89k0jav {
  fill: currentColor;
  d: path("m10.596 21.904l-8.5-8.5q-.14-.14-.14-.354t.14-.354l10.6-10.6q.14-.14.351-.13q.21.009.357.155l8.5 8.475q.14.14.14.354t-.14.354l-10.6 10.6q-.14.14-.354.14t-.354-.14");
}
</style><path class="fn89k0jav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:highlighter-size-5-outline"} {...others} />);
}

export default Component;
