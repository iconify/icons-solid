import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.wcrhzya1l {
  fill: currentColor;
  d: path("M5 10a2 2 0 1 1 0-4a2 2 0 0 1 0 4m10-2a4 4 0 0 0-4-4H5a4 4 0 1 0 0 8h6a4 4 0 0 0 4-4m-4-3a3 3 0 1 1 0 6H5a3 3 0 0 1 0-6z");
}
</style><path class="wcrhzya1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:toggle-left-16-regular"} {...others} />);
}

export default Component;
