import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mt-kon0px {
  fill: currentColor;
  d: path("M9 19v3H3a1 1 0 0 1-1-1v-8a3 3 0 0 1 3-3h1V8a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2h1a3 3 0 0 1 3 3v8a1 1 0 0 1-1 1h-6v-3a3 3 0 1 0-6 0m1.01-12H10a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2m4 0H14a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M10 11a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm4.01 0H14a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M6 20v-8H5a.997.997 0 0 0-1 1v7Zm12 0h2v-7a1 1 0 0 0-1-1h-1Zm-7 2v-3a1 1 0 0 1 2 0v3Z");
}
</style><path class="mt-kon0px"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-apartment-fill-round"} {...others} />);
}

export default Component;
