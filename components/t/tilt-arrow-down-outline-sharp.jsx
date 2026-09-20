import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o5z78ibxb {
  fill: currentColor;
  d: path("M5 20V4h14.02v16zm1-1h12.02V5H6zm5.52-5.536L9.4 11.35l-.708.708l3.327 3.327l3.289-3.289l-.708-.713l-2.08 2.08V8.77h-1zM18.02 19H6z");
}
</style><path class="o5z78ibxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tilt-arrow-down-outline-sharp"} {...others} />);
}

export default Component;
