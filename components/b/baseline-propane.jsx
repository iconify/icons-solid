import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mtl23bc2p {
  fill: currentColor;
  d: path("M17 6h-1V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H7c-3.31 0-6 2.69-6 6s2.69 6 6 6v3h2v-3h6v3h2v-3c3.31 0 6-2.69 6-6s-2.69-6-6-6m-7-1h4v1h-4z");
}
</style><path class="mtl23bc2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-propane"} {...others} />);
}

export default Component;
