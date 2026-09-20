import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.frtglcbsk {
  fill: currentColor;
  d: path("M28.634 3.366a1.25 1.25 0 0 1 0 1.768l-.98.979a1.25 1.25 0 1 1-1.767-1.768l.98-.979a1.25 1.25 0 0 1 1.767 0m-4.896 4.896a1.25 1.25 0 0 1 0 1.768l-1.958 1.958a1.25 1.25 0 1 1-1.768-1.768l1.958-1.958a1.25 1.25 0 0 1 1.768 0m-5.875 5.875a1.25 1.25 0 0 1 0 1.768l-1.958 1.958a1.25 1.25 0 1 1-1.768-1.768l1.958-1.958a1.25 1.25 0 0 1 1.768 0m-5.875 5.875a1.25 1.25 0 0 1 0 1.768l-1.958 1.958a1.25 1.25 0 0 1-1.768-1.768l1.958-1.958a1.25 1.25 0 0 1 1.768 0m-5.875 5.875a1.25 1.25 0 0 1 0 1.768l-.98.979a1.25 1.25 0 0 1-1.767-1.768l.98-.98a1.25 1.25 0 0 1 1.767 0");
}
</style><path class="frtglcbsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-dashes-32-filled"} {...others} />);
}

export default Component;
