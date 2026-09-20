import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r_s8w1dgy {
  fill: currentColor;
  d: path("M12 15h5V5h-6v6h4v2h-3zm3-6h-2V7h2zm-9 9V2h16v16zm-4 4V6h2v14h14v2z");
}
</style><path class="r_s8w1dgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-9-sharp"} {...others} />);
}

export default Component;
