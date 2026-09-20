import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cr34agb8z {
  fill: currentColor;
  d: path("M8.23 16.77h7.54v-1.54H8.23zm-3-3h1.54v-1.54H5.23zm3 0h1.54v-1.54H8.23zm3 0h1.54v-1.54h-1.54zm3 0h1.54v-1.54h-1.54zm3 0h1.54v-1.54h-1.54zM3 19V5h18v14zm1-9.5h16V6H4zM4 18h16v-7.5H4zm0 0v-7.5z");
}
</style><path class="cr34agb8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:keyboard-onscreen-outline-sharp"} {...others} />);
}

export default Component;
