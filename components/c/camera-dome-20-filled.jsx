import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cs2lrub_i {
  fill: currentColor;
  d: path("M2 4.5A1.5 1.5 0 0 1 3.5 3h13a1.5 1.5 0 0 1 0 3h-13A1.5 1.5 0 0 1 2 4.5M10 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-2 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0M3 7h14v4a7 7 0 1 1-14 0zm7 1a4 4 0 1 0 0 8a4 4 0 0 0 0-8");
}
</style><path class="cs2lrub_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:camera-dome-20-filled"} {...others} />);
}

export default Component;
