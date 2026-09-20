import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ak0nrab9l {
  fill: currentColor;
  d: path("M16.65 13L11 7.35l5.65-5.65l5.65 5.65zM3 11V3h8v8zm10 10v-8h8v8zM3 21v-8h8v8z");
}
</style><path class="ak0nrab9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:widgets-sharp"} {...others} />);
}

export default Component;
