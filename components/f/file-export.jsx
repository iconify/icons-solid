import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sierwqwss {
  fill: currentColor;
  d: path("m5.454 21.664l-.688-.714l3.45-3.45H5.234v-1h4.669v4.67h-1v-2.957zM12.289 21v-6.884H5v-9.5q0-.667.475-1.141T6.615 3H14.5L19 7.5v11.885q0 .666-.475 1.14t-1.14.475zM14 8h4l-4-4l4 4l-4-4z");
}
</style><path class="sierwqwss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:file-export"} {...others} />);
}

export default Component;
