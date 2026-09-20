import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i1pa2hbit {
  fill: currentColor;
  d: path("M6 18V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zm6-6V4zm7-1h2V5h-2v4h-2V5h-2v6h4z");
}
</style><path class="i1pa2hbit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-4-outline-sharp"} {...others} />);
}

export default Component;
