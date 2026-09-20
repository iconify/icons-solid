import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xx8hedcya {
  fill: currentColor;
  d: path("m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z");
}
</style><path class="xx8hedcya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:keyboard-arrow-down"} {...others} />);
}

export default Component;
