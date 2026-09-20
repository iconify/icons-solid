import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a8sjy7wwc {
  fill: currentColor;
  d: path("M4 5V3h16v2zm7 16V10.8l-2.6 2.6L7 12l5-5l5 5l-1.4 1.4l-2.6-2.6V21z");
}
</style><path class="a8sjy7wwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:vertical-align-top-outline"} {...others} />);
}

export default Component;
