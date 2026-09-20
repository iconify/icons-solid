import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h10_rqlzb {
  fill: currentColor;
  d: path("M3 21V3h8v2H5v14h14v-6h2v8zm13-10V8h-3V6h3V3h2v3h3v2h-3v3z");
}
</style><path class="h10_rqlzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:new-window-sharp"} {...others} />);
}

export default Component;
