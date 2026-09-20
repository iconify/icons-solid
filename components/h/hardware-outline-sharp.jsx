import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qtbkr_2mx {
  fill: currentColor;
  d: path("M9 8H4q0-2.075 1.463-3.537T9 3h6v3l3-3h2v8h-2l-3-3v13H9zm2 11h2v-6h-2zm0-8h2V5H9q-.65 0-1.225.263t-1 .737H11zm1 1");
}
</style><path class="qtbkr_2mx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:hardware-outline-sharp"} {...others} />);
}

export default Component;
