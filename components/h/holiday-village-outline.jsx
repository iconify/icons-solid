import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hh_i0xbub {
  fill: currentColor;
  d: path("M4.385 19v-8.577l5-5l5 5V19zm1-1h3.23v-2.308h1.539V18h3.23v-7.175l-4-4l-4 4zm3.23-5.23v-1.54h1.539v1.54zM16 19.02V9.751l-4.329-4.329h1.421L17 9.331v9.688zm2.616 0V8.66l-3.237-3.237h1.44l2.797 2.816v10.78zM5.385 18h8z");
}
</style><path class="hh_i0xbub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:holiday-village-outline"} {...others} />);
}

export default Component;
