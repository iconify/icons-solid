import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l6bmxwbqx {
  fill: currentColor;
  d: path("M17.192 15.308L13.885 12l3.307-3.308l.708.708l-2.094 2.1H21v1h-5.194l2.094 2.1zM11.5 19V5h1v14zm-4.692-3.692L6.1 14.6l2.094-2.1H3v-1h5.194L6.1 9.4l.708-.708L10.116 12z");
}
</style><path class="l6bmxwbqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:horizontal-align-center"} {...others} />);
}

export default Component;
