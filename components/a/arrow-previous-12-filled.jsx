import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.dcesrob7j {
  fill: currentColor;
  d: path("m6.81 6l2.72-2.72a.75.75 0 0 0-1.06-1.06L5.22 5.47a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06zM3 2.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="dcesrob7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-previous-12-filled"} {...others} />);
}

export default Component;
