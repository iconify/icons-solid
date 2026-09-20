import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.f44-_0bvz {
  fill: currentColor;
  d: path("M2.75 3A1.75 1.75 0 0 0 1 4.75V6h13v6.5a.5.5 0 0 0 1 0V4.75A1.75 1.75 0 0 0 13.25 3zM8 7H1v4.25c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 0 0 8 11.25zM3 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 3 9");
}
</style><path class="f44-_0bvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:desk-16-filled"} {...others} />);
}

export default Component;
