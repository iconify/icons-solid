import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vzm_cqbnu {
  fill: currentColor;
  d: path("M14 8h4l-4-4zM6.616 21q-.667 0-1.141-.475T5 19.386V16.5h14v2.885q0 .666-.475 1.14t-1.14.475zm-5.039-6.5v-1h20.846v1zM5 11.5V4.616q0-.667.475-1.141T6.615 3H14.5L19 7.5v4z");
}
</style><path class="vzm_cqbnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:scan"} {...others} />);
}

export default Component;
