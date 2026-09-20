import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yg1bmcl7b {
  fill: currentColor;
  d: path("M11 16H3v5h8zm2 0v5h8v-5zm-2-2V9H3v5zm2 0h8V9h-8zM3 7h18V3H3z");
}
</style><path class="yg1bmcl7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:table-sharp"} {...others} />);
}

export default Component;
