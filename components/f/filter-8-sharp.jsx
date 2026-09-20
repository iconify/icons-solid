import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yi737mzxi {
  fill: currentColor;
  d: path("M6 18V2h16v16zm-4 4V6h2v14h14v2zm10-12l-1 1v4h6v-4l-1-1l1-1V5h-6v4zm3-3v2h-2V7zm0 4v2h-2v-2z");
}
</style><path class="yi737mzxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-8-sharp"} {...others} />);
}

export default Component;
