import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yf32hlbwu {
  fill: currentColor;
  d: path("m12.406 2.086l9 4A1 1 0 0 1 21 8h-3v8h1a1 1 0 0 1 1 1v3h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h1v-3a1 1 0 0 1 1-1h1V8H3a1 1 0 0 1-.406-1.914l9-4a1 1 0 0 1 .812 0M11 8H8v8h3Zm2 0v8h3V8Z");
}
</style><path class="yf32hlbwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:courthouse-fill-sharp"} {...others} />);
}

export default Component;
