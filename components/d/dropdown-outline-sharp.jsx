import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k5w-jz4wj {
  fill: currentColor;
  d: path("M11 13h7V6h-7zm-8 8V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="k5w-jz4wj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dropdown-outline-sharp"} {...others} />);
}

export default Component;
