import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.po98huw9o {
  fill: currentColor;
  d: path("M3 20V4h7.808v16zm10.192 0V4H21v16zM4 19h5.808V5H4zm10.192 0H20V5h-5.808zm-8.808-4.615h3v-1h-3zm10.232 0h3v-1h-3zM5.385 11.577h3v-1h-3zm10.23 0h3v-1h-3zM5.386 8.75h3v-1h-3zm10.23 0h3v-1h-3zM4 19h5.808zm10.192 0H20z");
}
</style><path class="po98huw9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:host-outline-sharp"} {...others} />);
}

export default Component;
