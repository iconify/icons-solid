import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v5une0p8v {
  fill: currentColor;
  d: path("M6 7a1 1 0 0 0 1-1V3a1 1 0 0 1 2 0v3a3 3 0 0 1-3 3H3a1 1 0 0 1 0-2Zm11-1a1 1 0 0 0 1 1h3a1 1 0 0 1 0 2h-3a3 3 0 0 1-3-3V3a1 1 0 0 1 2 0ZM7 18a.997.997 0 0 0-1-1H3a1 1 0 0 1 0-2h3a3 3 0 0 1 3 3v3a1 1 0 0 1-2 0Zm11-1a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0v-3a3 3 0 0 1 3-3h3a1 1 0 0 1 0 2Z");
}
</style><path class="v5une0p8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fullscreen-exit-bulk"} {...others} />);
}

export default Component;
