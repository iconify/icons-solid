import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u2ermtb-d {
  fill: currentColor;
  d: path("M2.5 21V8.154h1V20H17v1zm3-3V7.915l8-4.684l.98.579L6.7 8.389l6.8 4l7.039-4.143l.961.612V18zm7.773-7.577l-2.107-2.107l.707-.708l1.4 1.4l3.55-3.55l.708.707z");
}
</style><path class="u2ermtb-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:notification-multiple-sharp"} {...others} />);
}

export default Component;
