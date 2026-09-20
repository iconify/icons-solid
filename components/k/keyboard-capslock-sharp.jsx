import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6xmm6bjb {
  fill: currentColor;
  d: path("M6.5 17.5v-1h11v1zM12 6.292l5.308 5.308l-.708.708l-4.6-4.6l-4.6 4.6l-.708-.708z");
}
</style><path class="b6xmm6bjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:keyboard-capslock-sharp"} {...others} />);
}

export default Component;
