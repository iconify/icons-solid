import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o0r1fobsb {
  fill: currentColor;
  d: path("M2 7a5 5 0 0 1 5-5h1a1 1 0 0 1 0 2H7a3 3 0 0 0-3 3v1a1 1 0 0 1-2 0Zm15-5a5 5 0 0 1 5 5v1a1 1 0 0 1-2 0V7a3 3 0 0 0-3-3h-1a1 1 0 0 1 0-2ZM7 22a5 5 0 0 1-5-5v-1a1 1 0 0 1 2 0v1a3 3 0 0 0 3 3h1a1 1 0 0 1 0 2Zm15-5a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22h-1a1 1 0 0 1 0-2h1a3 3 0 0 0 3-3v-1a1 1 0 0 1 2 0Z");
}
</style><path class="o0r1fobsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fullscreen-fill-round"} {...others} />);
}

export default Component;
