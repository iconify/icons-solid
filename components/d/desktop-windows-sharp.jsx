import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mud3xccvm {
  fill: currentColor;
  d: path("M8 21v-2h2v-2H2V3h20v14h-8v2h2v2z");
}
</style><path class="mud3xccvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:desktop-windows-sharp"} {...others} />);
}

export default Component;
