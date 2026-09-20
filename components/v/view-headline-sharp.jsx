import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hgajco8co {
  fill: currentColor;
  d: path("M4 15v-2h16v2zm0 4v-2h16v2zm0-8V9h16v2zm0-4V5h16v2z");
}
</style><path class="hgajco8co"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-headline-sharp"} {...others} />);
}

export default Component;
