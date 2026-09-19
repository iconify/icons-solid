import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e0xw4_bwl {
  fill: currentColor;
  d: path("M12.5 12h3v7h3v-7h3V9h-9zm3-8h-13v3h5v12h3V7h5z");
}
</style><path class="e0xw4_bwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-text-fields"} {...others} />);
}

export default Component;
