import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ecos1xb5k {
  fill: currentColor;
  d: path("M8.885 18.116v-1.231h5.384q.27 0 .443-.174t.173-.442v-3.038q0-.27-.173-.442t-.443-.173H8.885V5.885h7.23v1.23h-6v4.27h4.154q.77 0 1.308.538t.539 1.308v3.038q0 .77-.539 1.308t-1.308.538z");
}
</style><path class="ecos1xb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:timer-5-shutter-outline"} {...others} />);
}

export default Component;
