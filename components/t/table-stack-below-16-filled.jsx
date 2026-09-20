import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.r8e--nbuc {
  fill: currentColor;
  d: path("M13.5 14a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1zM5 10H2.5a.5.5 0 0 1-.5-.5V6h3zm1 0h4V6H6zm8-4v3.5a.5.5 0 0 1-.5.5H11V6zm-3-1h3v-.5A2.5 2.5 0 0 0 11.5 2H11zm-1-3H6v3h4zM4.5 2H5v3H2v-.5A2.5 2.5 0 0 1 4.5 2");
}
</style><path class="r8e--nbuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-stack-below-16-filled"} {...others} />);
}

export default Component;
