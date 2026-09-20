import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g_y-h6bce {
  fill: var(--svg-color--fff, #fff);
  d: path("M10.313 11.156H7.78L12 4.406l5.344 9.563H8.906l-1.969 3.375h1.97l1.687-2.813h2.812l1.688 2.813h2.25l-1.688-2.813h2.25L21 19.594h-7.313L12 16.219l-1.687 3.375H3l4.5-7.875h6.187L12 8.344z");
}
</style><path class="g_y-h6bce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:acria"} {...others} />);
}

export default Component;
