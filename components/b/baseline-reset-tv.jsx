import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kl5yz1o-a {
  fill: currentColor;
  d: path("M21 10h-8.01V7L9 11l3.99 4v-3H21v5H3V5h18v3h2V5c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2v-5H23c0-1.1-.9-2-2-2");
}
</style><path class="kl5yz1o-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-reset-tv"} {...others} />);
}

export default Component;
