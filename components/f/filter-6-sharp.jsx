import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w-sqm5z8y {
  fill: currentColor;
  d: path("M13 9V7h3V5h-5v10h6V9zm0 2h2v2h-2zm-7 7V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="w-sqm5z8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-6-sharp"} {...others} />);
}

export default Component;
