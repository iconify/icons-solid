import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vr6scdcse {
  fill: currentColor;
  d: path("M3 9V6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v3Zm18 0h-8V8a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3ZM3 11h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m0 4h8v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm18 1a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-1h8Z");
}
</style><path class="vr6scdcse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:align-center-vertical-fill"} {...others} />);
}

export default Component;
