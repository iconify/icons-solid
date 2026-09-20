import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vu97qhbcd {
  fill: currentColor;
  d: path("M17.5 15.539V6.5H9v-1h9.5v10.039zm-5 5V11.5H4v-1h9.5v10.039z");
}
</style><path class="vu97qhbcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:more-up-outline"} {...others} />);
}

export default Component;
