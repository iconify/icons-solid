import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z2xd-cbcc {
  fill: currentColor;
  d: path("M22 18v-2H8V4h2L7 1L4 4h2v2H2v2h4v10h10v2h-2l3 3l3-3h-2v-2zM10 8h6v6h2V6h-8z");
}
</style><path class="z2xd-cbcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-transform"} {...others} />);
}

export default Component;
