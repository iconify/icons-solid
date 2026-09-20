import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.phaiv-tre {
  fill: currentColor;
  d: path("M8.5 7.25a1.25 1.25 0 1 0-2.5 0v28.5A6.25 6.25 0 0 0 12.25 42h28.5a1.25 1.25 0 1 0 0-2.5h-28.5a3.75 3.75 0 0 1-3.75-3.75zm19.5 6c0-.69.56-1.25 1.25-1.25h10c.69 0 1.25.56 1.25 1.25v10a1.25 1.25 0 1 1-2.5 0v-6.982L27.884 26.384a1.25 1.25 0 0 1-1.725.04l-4.618-4.197l-7.407 7.407a1.25 1.25 0 0 1-1.768-1.768l8.25-8.25a1.25 1.25 0 0 1 1.725-.04l4.618 4.197l9.273-9.273H29.25c-.69 0-1.25-.56-1.25-1.25");
}
</style><path class="phaiv-tre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:data-trending-48-regular"} {...others} />);
}

export default Component;
