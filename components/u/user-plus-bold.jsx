import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ojduwkb1j {
  fill: currentColor;
  d: path("M256 136a12 12 0 0 1-12 12h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1 0-24h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 12 12m-54.81 56.28a12 12 0 1 1-18.38 15.44C169.12 191.42 145 172 108 172c-28.89 0-55.46 12.68-74.81 35.72a12 12 0 0 1-18.38-15.44a124.1 124.1 0 0 1 48.69-35.75a72 72 0 1 1 89 0a124 124 0 0 1 48.69 35.75M108 148a48 48 0 1 0-48-48a48.05 48.05 0 0 0 48 48");
}
</style><path class="ojduwkb1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:user-plus-bold"} {...others} />);
}

export default Component;
