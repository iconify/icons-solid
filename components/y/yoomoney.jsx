import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dpy8r2b2z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.229 24c0 3.048-2.503 5.519-5.59 5.519s-5.588-2.471-5.588-5.52c0-3.047 2.502-5.518 5.589-5.518h0c3.086 0 5.588 2.47 5.588 5.519");
}

.zu9k0421w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.639 10.3c-5.863.015-11.082 3.675-13.034 9.14v-5.553H4.5l6.863 20.928h5.242v-6.257c1.95 5.466 7.17 9.127 13.034 9.143c7.654 0 13.86-6.133 13.861-13.7V24c0-7.567-6.206-13.7-13.86-13.7z");
}
</style><path class="zu9k0421w"/><path class="dpy8r2b2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:yoomoney"} {...others} />);
}

export default Component;
