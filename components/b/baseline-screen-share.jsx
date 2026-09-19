import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kxer7lz7t {
  fill: currentColor;
  d: path("M20 18c1.1 0 1.99-.9 1.99-2L22 6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72c.56-2.67 2.11-5.33 6-5.87V7l4 3.73z");
}
</style><path class="kxer7lz7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-screen-share"} {...others} />);
}

export default Component;
