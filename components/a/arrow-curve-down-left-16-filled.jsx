import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.hzu00ca8b {
  fill: currentColor;
  d: path("M11.151 1.378a.75.75 0 0 1-.279 1.023C8.458 3.781 8.25 6.03 8.25 8.001v4.438l2.22-2.22a.75.75 0 1 1 1.06 1.061l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 1.06-1.06l2.22 2.22V8c0-2.029.192-5.08 3.378-6.901a.75.75 0 0 1 1.023.279");
}
</style><path class="hzu00ca8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-curve-down-left-16-filled"} {...others} />);
}

export default Component;
