import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f6e0z0b8x {
  fill: currentColor;
  d: path("M11 21V6.825L9.4 8.4L8 7l4-4l4 4l-1.4 1.4L13 6.825V9q0 1.6.663 2.937t1.6 2.375t1.962 1.788T19 17.275l-1.45 1.45q-1.425-.875-2.575-1.888T13 14.7V21z");
}
</style><path class="f6e0z0b8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ramp-left"} {...others} />);
}

export default Component;
