import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ce9o4-3gc {
  fill: var(--svg-color--fff, #fff);
  d: path("M11.89 14.913a.42.42 0 0 0 .017-.442l-4.81-8.542a.38.38 0 0 0-.328-.201H3.387c-.3 0-.485.343-.332.616L9.37 17.722a.38.38 0 0 0 .654.027zm8.728 3.36c.295 0 .48-.344.327-.611l-6.49-11.733a.38.38 0 0 0-.339-.201h-3.37c-.295 0-.48.343-.328.616l6.513 11.727a.38.38 0 0 0 .327.202zm-14.563-.726c.147.273-.039.726-.339.726H3.404c-.218 0-.404-.295-.404-.518v-4.118c0-.415.535-.568.736-.208l2.313 4.118z");
}
</style><path class="ce9o4-3gc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:mplx"} {...others} />);
}

export default Component;
