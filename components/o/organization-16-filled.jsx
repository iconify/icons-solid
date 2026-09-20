import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.xdw64fbdx {
  fill: currentColor;
  d: path("M5.5 3.5a2.5 2.5 0 1 1 3 2.45V7h2.134C11.388 7 12 7.612 12 8.367v1.683a2.5 2.5 0 1 1-1 0V8.367A.367.367 0 0 0 10.634 8H5.367A.367.367 0 0 0 5 8.367v1.683a2.5 2.5 0 1 1-1 0V8.367C4 7.612 4.612 7 5.367 7H7.5V5.95a2.5 2.5 0 0 1-2-2.45");
}
</style><path class="xdw64fbdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:organization-16-filled"} {...others} />);
}

export default Component;
