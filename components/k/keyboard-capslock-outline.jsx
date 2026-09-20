import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cdhhhubes {
  fill: currentColor;
  d: path("M6 18v-2h12v2zm6-12.4l6 6l-1.4 1.4L12 8.4L7.4 13L6 11.6z");
}
</style><path class="cdhhhubes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:keyboard-capslock-outline"} {...others} />);
}

export default Component;
