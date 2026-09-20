import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vk0avs50f {
  fill: currentColor;
  d: path("M6.616 21q-.667 0-1.141-.475T5 19.386V16.5h14v2.885q0 .666-.475 1.14t-1.14.475zM14 8h4l-4-4zm-4.808 6.5v-1h5.616v1zm7.616 0v-1h5.615v1zm-15.231 0v-1h5.615v1zM5 11.5V4.616q0-.667.475-1.141T6.615 3H14.5L19 7.5v4z");
}
</style><path class="vk0avs50f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:insert-page-break"} {...others} />);
}

export default Component;
