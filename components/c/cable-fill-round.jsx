import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u0q9ekbbp {
  fill: currentColor;
  d: path("M4 3a1 1 0 0 1 2 0v1h2V3a1 1 0 0 1 2 0v1.171A3.001 3.001 0 0 1 9 10h-.733A2 2 0 0 0 10 11h4a4.006 4.006 0 0 1 3.874 3H19a3 3 0 0 1 1 5.829V21a1 1 0 0 1-2 0v-1h-2v1a1 1 0 0 1-2 0v-1.171A3.001 3.001 0 0 1 15 14h.733A2 2 0 0 0 14 13h-4a4.006 4.006 0 0 1-3.874-3H5a3 3 0 0 1-1-5.829Z");
}
</style><path class="u0q9ekbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cable-fill-round"} {...others} />);
}

export default Component;
