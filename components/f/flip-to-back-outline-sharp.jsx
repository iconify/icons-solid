import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yohat5bit {
  fill: currentColor;
  d: path("M4 20V7.692h1V19h11.308v1zm3.692-3.692v-1.231h1.231v1.23zm0-3.693v-1.23h1.231v1.23zm0-3.692v-1.23h1.231v1.23zm0-3.692V4h1.231v1.23zm3.692 11.077v-1.231h1.231v1.23zm0-11.077V4h1.232v1.23zm3.693 0V4h1.23v1.23zm0 11.077v-1.231h1.23v1.23zM18.769 5.23V4H20v1.23zm0 11.077v-1.231H20v1.23zm0-3.693v-1.23H20v1.23zm0-3.692v-1.23H20v1.23z");
}
</style><path class="yohat5bit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:flip-to-back-outline-sharp"} {...others} />);
}

export default Component;
