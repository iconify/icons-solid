import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.unrtt1bfk {
  fill: currentColor;
  d: path("M6 22h7v-4H6zm9 0h7v-4h-7zM2 18V2h16v2H4v14zm4-2h7v-4H6zm9 0h7v-4h-7zm-9-6h16V6H6z");
}
</style><path class="unrtt1bfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:table-view-sharp"} {...others} />);
}

export default Component;
