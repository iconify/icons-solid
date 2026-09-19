import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lebgayb6s {
  fill: currentColor;
  d: path("M17 20.41L18.41 19L15 15.59L13.59 17zM7.5 8H11v5.59L5.59 19L7 20.41l6-6V8h3.5L12 3.5z");
}
</style><path class="lebgayb6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:merge-type"} {...others} />);
}

export default Component;
