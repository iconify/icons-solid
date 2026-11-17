import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l4fxs6wgd {
  fill: currentColor;
  d: path("M5 7a.997.997 0 0 0-1 1v4a.997.997 0 0 0 1 1h1a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1a1 1 0 0 1 0 2Zm10 1v4a3 3 0 1 1-6 0V8a3 3 0 0 1 2.997-3H12a3 3 0 0 1 3 3m-2 4V8a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0m7-1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1v1h2a1 1 0 0 1 0 2h-2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h1v-1h-2a1 1 0 0 1 0-2Z");
}
</style><path class="l4fxs6wgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:co2-bulk-round"} {...others} />);
}

export default Component;
