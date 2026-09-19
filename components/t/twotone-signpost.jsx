import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bwg8kcb8x {
  fill: currentColor;
  d: path("M6 6h11.17l1 1l-1 1H6zm12 10H6.83l-1-1l1-1H18z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.qjsr08bhq {
  fill: currentColor;
  d: path("M13 10h5l3-3l-3-3h-5V2h-2v2H4v6h7v2H6l-3 3l3 3h5v4h2v-4h7v-6h-7zM6 6h11.17l1 1l-1 1H6zm12 10H6.83l-1-1l1-1H18z");
}
</style><path class="bwg8kcb8x"/><path class="qjsr08bhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-signpost"} {...others} />);
}

export default Component;
