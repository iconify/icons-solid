import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pjq8s_fik {
  fill: currentColor;
  d: path("M19.564 18.542A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 2.501.918 4.788 2.436 6.542l5.983-5.909a2.25 2.25 0 0 1 3.162 0zM18.5 19.599l-5.973-5.898a.75.75 0 0 0-1.054 0L5.5 19.599A9.96 9.96 0 0 0 12 22a9.96 9.96 0 0 0 6.5-2.4m-1-11.1a2 2 0 1 1-4 0a2 2 0 0 1 4 0");
}
</style><path class="pjq8s_fik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:image-circle-24-filled"} {...others} />);
}

export default Component;
