import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.m1lh-xb2a {
  fill: currentColor;
  d: path("M22.47 4.47a.75.75 0 1 1 1.06 1.06L15.06 14l8.47 8.47a.75.75 0 1 1-1.06 1.06L14 15.06l-8.47 8.47a.75.75 0 0 1-1.06-1.06L12.94 14L4.47 5.53a.75.75 0 0 1 1.06-1.06L14 12.94z");
}
</style><path class="m1lh-xb2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:dismiss-28-regular"} {...others} />);
}

export default Component;
