import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.b17082opm {
  fill: currentColor;
  d: path("M18.03 22.78a.75.75 0 0 1-1.06 0l-8.75-8.75a.75.75 0 0 1 0-1.06l8.75-8.75a.75.75 0 1 1 1.06 1.06L9.81 13.5l8.22 8.22a.75.75 0 0 1 0 1.06");
}
</style><path class="b17082opm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chevron-left-28-regular"} {...others} />);
}

export default Component;
