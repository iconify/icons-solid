import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i6el-ub2l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m7.632 17.988l21.824 12V17.963l10.912 6.034l-10.912 5.99V42.01L7.632 29.987v12.024l10.912-5.958l-10.912-6.065v-24l10.912 6.035z");
}
</style><path class="i6el-ub2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:vocaloid-collection"} {...others} />);
}

export default Component;
