import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.boxcixbmh {
  fill: currentColor;
  d: path("M5 2h6a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9v1a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2v3a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-1H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m4.707 4.707a.999.999 0 1 0-1.414-1.414l-3 3A1 1 0 0 0 6 10h1.586l-1.293 1.293a.999.999 0 1 0 1.414 1.414l3-3A1 1 0 0 0 10 8H8.414Z");
}
</style><path class="boxcixbmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:wallbox-fill"} {...others} />);
}

export default Component;
