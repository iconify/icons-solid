import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kmxtikbee {
  fill: currentColor;
  d: path("M7.23 16.77v-1.54h9.54v1.54zm-4-4v-1.54h1.54v1.54zm4 0v-1.54h1.54v1.54zm4 0v-1.54h1.54v1.54zm4 0v-1.54h1.54v1.54zm4 0v-1.54h1.54v1.54zm-16-4V7.23h1.54v1.54zm4 0V7.23h1.54v1.54zm4 0V7.23h1.54v1.54zm4 0V7.23h1.54v1.54zm4 0V7.23h1.54v1.54z");
}
</style><path class="kmxtikbee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:keyboard-keys-outline"} {...others} />);
}

export default Component;
