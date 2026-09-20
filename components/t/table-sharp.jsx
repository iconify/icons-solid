import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b15spvb_j {
  fill: currentColor;
  d: path("M11.5 14.885H4V20h7.5zm1 0V20H20v-5.115zm-1-1V8.769H4v5.116zm1 0H20V8.769h-7.5zM4 7.769h16V4H4z");
}
</style><path class="b15spvb_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:table-sharp"} {...others} />);
}

export default Component;
