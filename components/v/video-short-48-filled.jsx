import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.udz6mdvab {
  fill: currentColor;
  d: path("M33.75 4A6.25 6.25 0 0 1 40 10.25v27.5A6.25 6.25 0 0 1 33.75 44h-19.5A6.25 6.25 0 0 1 8 37.75v-27.5A6.25 6.25 0 0 1 14.25 4zM22.74 17.833c-1.666-.952-3.74.251-3.74 2.17V28c0 1.92 2.074 3.122 3.74 2.17l6.997-3.997c1.68-.96 1.68-3.382 0-4.342z");
}
</style><path class="udz6mdvab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:video-short-48-filled"} {...others} />);
}

export default Component;
