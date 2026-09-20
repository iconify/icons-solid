import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w7_kqccjk {
  fill: currentColor;
  d: path("M17.6 12L3.5 6.9L4.2 5L21 11.15V20H3v-8zM10 17h8v-2h-8zm-4 0h2v-2H6z");
}
</style><path class="w7_kqccjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:scanner-sharp"} {...others} />);
}

export default Component;
