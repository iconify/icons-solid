import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.e9-s3lbcn {
  fill: currentColor;
  d: path("M10.72 16.78a.75.75 0 0 0 1.06 0l4-4a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 1 0-1.06 1.06l2.72 2.72H7A1.5 1.5 0 0 1 5.5 10V3.75a.75.75 0 0 0-1.5 0V10a3 3 0 0 0 3 3h6.44l-2.72 2.72a.75.75 0 0 0 0 1.06");
}
</style><path class="e9-s3lbcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-turn-down-right-20-filled"} {...others} />);
}

export default Component;
