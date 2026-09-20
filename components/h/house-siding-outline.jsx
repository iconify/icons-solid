import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s1vvtqbkq {
  fill: currentColor;
  d: path("M5.692 20V9.946L2.604 12.25L2 11.458L12 4l10.02 7.458l-.604.792l-3.089-2.304V20h-1v-3H6.692v3zm1-7.77h10.635V9.462H6.692zm0 3.77h10.635v-2.77H6.692zm.981-7.539h8.654L12 5.256z");
}
</style><path class="s1vvtqbkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:house-siding-outline"} {...others} />);
}

export default Component;
