import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d66s69kcq {
  fill: currentColor;
  d: path("M7 18v-2h10v2zm-4-5v-2h18v2zm4-5V6h10v2z");
}
</style><path class="d66s69kcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:list-2-outline"} {...others} />);
}

export default Component;
