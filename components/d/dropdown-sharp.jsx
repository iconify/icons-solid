import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u4a4eob2r {
  fill: currentColor;
  d: path("M12 12h6V6h-6zm-8 8V4h16v16z");
}
</style><path class="u4a4eob2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:dropdown-sharp"} {...others} />);
}

export default Component;
