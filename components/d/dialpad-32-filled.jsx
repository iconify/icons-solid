import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.qn154jb7b {
  fill: currentColor;
  d: path("M9 7.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m7-14a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m7-21a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5");
}
</style><path class="qn154jb7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:dialpad-32-filled"} {...others} />);
}

export default Component;
