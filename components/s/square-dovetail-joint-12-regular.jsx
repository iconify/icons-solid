import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.p_2mbylti {
  fill: currentColor;
  d: path("M8 2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M3 8V4a1 1 0 0 1 1-1h1v2a.5.5 0 0 0 .621.485L7 5.141V6.86l-1.379-.344A.5.5 0 0 0 5 7.001v2H4a1 1 0 0 1-1-1zm6 0a1 1 0 0 1-1 1H6V7.641l1.379.344A.5.5 0 0 0 8 7.5v-3a.5.5 0 0 0-.621-.485L6 4.359V3h2a1 1 0 0 1 1 1z");
}
</style><path class="p_2mbylti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:square-dovetail-joint-12-regular"} {...others} />);
}

export default Component;
