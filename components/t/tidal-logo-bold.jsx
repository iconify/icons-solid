import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.p-nmibc3j {
  fill: currentColor;
  d: path("m252.49 87.51l-38-38a12 12 0 0 0-17 0L168 79l-31.51-31.49a12 12 0 0 0-17 0L88 79L58.49 49.51a12 12 0 0 0-17 0l-38 38a12 12 0 0 0 0 17l38 38a12 12 0 0 0 17 0L88 113l23 23l-31.49 31.51a12 12 0 0 0 0 17l40 40a12 12 0 0 0 17 0l40-40a12 12 0 0 0 0-17L145 136l23-23l29.51 29.52a12 12 0 0 0 17 0l38-38a12 12 0 0 0-.02-17.01M50 117L29 96l21-21l21 21Zm78 82l-23-23l23-23l23 23Zm0-80l-23-23l23-23l23 23Zm78-2l-21-21l21-21l21 21Z");
}
</style><path class="p-nmibc3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:tidal-logo-bold"} {...others} />);
}

export default Component;
