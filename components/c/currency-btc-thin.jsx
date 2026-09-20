import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ogjk-zb0x {
  fill: currentColor;
  d: path("M170.27 117.21A40 40 0 0 0 148 44V24a4 4 0 0 0-8 0v20h-24V24a4 4 0 0 0-8 0v20H72a4 4 0 0 0 0 8h12v144H72a4 4 0 0 0 0 8h36v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h12a44 44 0 0 0 10.27-86.79M92 52h56a32 32 0 0 1 0 64H92Zm68 144H92v-72h68a36 36 0 0 1 0 72");
}
</style><path class="ogjk-zb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:currency-btc-thin"} {...others} />);
}

export default Component;
