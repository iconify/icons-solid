import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mxh72sc9t {
  fill: currentColor;
  d: path("M19 12h3L12 3L2 12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2zM7 15v-4.81l4-3.6V15zm6 0V6.59l4 3.6V15z");
}
</style><path class="mxh72sc9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-foundation"} {...others} />);
}

export default Component;
