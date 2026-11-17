import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k-7rssreu {
  fill: currentColor;
  d: path("M21 21H3a1 1 0 0 1 0-2h1V7a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v1.968a4 4 0 0 1 3.499.75l1.624 1.3A5 5 0 0 1 20 14.922V19h1a1 1 0 0 1 0 2m-8-9.892V19h5v-4.078c0-.911-.414-1.773-1.126-2.342l-1.625-1.3A1.99 1.99 0 0 0 13 11.108");
}
</style><path class="k-7rssreu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-2-fill-round"} {...others} />);
}

export default Component;
