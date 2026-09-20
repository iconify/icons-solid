import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.zpvwmkxil {
  fill: currentColor;
  d: path("M4.29 12.297a1 1 0 1 0 1.423 1.405l7.289-7.376v17.675a1 1 0 1 0 2 0V6.328l7.286 7.374a1 1 0 0 0 1.423-1.405L14.89 3.368a1.25 1.25 0 0 0-1.778 0z");
}
</style><path class="zpvwmkxil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-up-28-filled"} {...others} />);
}

export default Component;
