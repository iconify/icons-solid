import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m2yg43yhw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.216 24.53V10.168s.438-5.664-5.75-5.664H15.707s-5.882-.38-5.882 5.883v25.295s-.423 5.809 6.057 5.809h7.882");
}

.rc9jncxoy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m32.082 26.864l6.098 2.91v8.5s.106 5.226-6.077 5.226m-.022-16.636l-6.098 2.91v8.5S25.877 43.5 32.06 43.5M18.248 9.876h7.648");
}
</style><path class="rc9jncxoy"/><path class="m2yg43yhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mobile-security"} {...others} />);
}

export default Component;
