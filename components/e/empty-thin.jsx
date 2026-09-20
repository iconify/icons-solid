import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ow8673bje {
  fill: currentColor;
  d: path("m192.76 62.72l18.2-20a4 4 0 0 0-5.96-5.41l-18.2 20a92 92 0 0 0-123.6 136l-18.2 20a4 4 0 1 0 6 5.38l18.2-20A92 92 0 0 0 192.76 62.72M44 128a84 84 0 0 1 137.46-64.75L68.63 187.36A83.72 83.72 0 0 1 44 128m84 84a83.64 83.64 0 0 1-53.46-19.25L187.37 68.64A84 84 0 0 1 128 212");
}
</style><path class="ow8673bje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:empty-thin"} {...others} />);
}

export default Component;
