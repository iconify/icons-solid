import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cdu9lcunw {
  fill: currentColor;
  d: path("M10.25 4a.75.75 0 0 1 0 1.5h-4A1.75 1.75 0 0 0 4.5 7.25v6.5c0 .966.784 1.75 1.75 1.75h6.5a1.75 1.75 0 0 0 1.75-1.75v-4a.75.75 0 1 1 1.5 0v4A3.25 3.25 0 0 1 12.75 17h-6.5A3.25 3.25 0 0 1 3 13.75v-6.5A3.25 3.25 0 0 1 6.25 4zm5.47-.78a.75.75 0 0 1 1.06 1.06l-7.19 7.19L8 12l.53-1.59z");
}
</style><path class="cdu9lcunw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:compose-20-filled"} {...others} />);
}

export default Component;
