import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bozf2b45m {
  fill: currentColor;
  d: path("M11 15h6V5h-6v2h4v2h-2v2h2v2h-4zm-5 3V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="bozf2b45m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-3-sharp"} {...others} />);
}

export default Component;
