import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.ld2q7lbio {
  fill: currentColor;
  d: path("M9.39 3a2.75 2.75 0 0 0-2.366 1.349l-4.885 8.25a2.75 2.75 0 0 0 0 2.802l4.885 8.25A2.75 2.75 0 0 0 9.39 25h9.22a2.75 2.75 0 0 0 2.366-1.348l4.887-8.25a2.75 2.75 0 0 0 0-2.804l-4.887-8.25A2.75 2.75 0 0 0 18.61 3zm-7.25 9.599l.645.382z");
}
</style><path class="ld2q7lbio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:hexagon-28-filled"} {...others} />);
}

export default Component;
