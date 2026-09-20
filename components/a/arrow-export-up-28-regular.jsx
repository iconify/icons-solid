import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.t4gfdvfhv {
  fill: currentColor;
  d: path("M21.75 24.5a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1 0-1.5zM13.22 2.22a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1-1.06 1.06L14.5 4.56v16.686a.75.75 0 0 1-1.5 0V4.561L7.78 9.78a.75.75 0 0 1-1.06-1.06z");
}
</style><path class="t4gfdvfhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-export-up-28-regular"} {...others} />);
}

export default Component;
