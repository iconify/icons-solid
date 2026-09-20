import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.j4u34nyhv {
  fill: currentColor;
  d: path("M8 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-1 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}
</style><path class="j4u34nyhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:more-vertical-16-regular"} {...others} />);
}

export default Component;
