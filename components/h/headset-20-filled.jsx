import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.x0cii72sd {
  fill: currentColor;
  d: path("M10 2a6 6 0 0 0-6 6v6a3 3 0 0 0 3 3h1.268A2 2 0 1 0 8 16H7a2 2 0 0 1-2-2v-1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5a5 5 0 0 1 10 0h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2V8a6 6 0 0 0-6-6");
}
</style><path class="x0cii72sd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:headset-20-filled"} {...others} />);
}

export default Component;
