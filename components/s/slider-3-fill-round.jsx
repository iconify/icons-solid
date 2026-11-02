import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lh_6htbue {
  fill: currentColor;
  d: path("M11 8a1 1 0 0 1-2 0V7H3a1 1 0 0 1 0-2h6V4a1 1 0 0 1 2 0Zm3-3h7a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2m3 9a1 1 0 0 1-2 0v-1H3a1 1 0 0 1 0-2h12v-1a1 1 0 0 1 2 0Zm3-3h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2M8 20a1 1 0 0 1-2 0v-1H3a1 1 0 0 1 0-2h3v-1a1 1 0 0 1 2 0Zm13-3a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2Z");
}
</style><path class="lh_6htbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:slider-3-fill-round"} {...others} />);
}

export default Component;
