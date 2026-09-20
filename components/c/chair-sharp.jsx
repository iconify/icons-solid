import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l7nn7wmoc {
  fill: currentColor;
  d: path("M4 21v-2H1v-9h4v5h14v-5h4v9h-3v2h-2v-2H6v2zm3-8V8H4V3h16v5h-3v5z");
}
</style><path class="l7nn7wmoc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chair-sharp"} {...others} />);
}

export default Component;
