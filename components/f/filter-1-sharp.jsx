import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tf9mk6-qv {
  fill: currentColor;
  d: path("M14 15h2V5h-4v2h2zm-8 3V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="tf9mk6-qv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-1-sharp"} {...others} />);
}

export default Component;
