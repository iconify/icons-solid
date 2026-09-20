import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.bglwzdb4g {
  fill: currentColor;
  d: path("M17.25 4.25a1.25 1.25 0 1 0-2.5 0v15.482l-4.616-4.616a1.25 1.25 0 0 0-1.768 1.768l6.75 6.75a1.25 1.25 0 0 0 1.768 0l6.75-6.75a1.25 1.25 0 0 0-1.768-1.768l-4.616 4.616zm-11 22.25a1.25 1.25 0 1 0 0 2.5h19.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="bglwzdb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-download-32-filled"} {...others} />);
}

export default Component;
