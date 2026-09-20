import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qtnpfrbcs {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14v-3H5zm11.5-5H19V5h-2.5zM5 14h2.5V5H5zm4.5 0h5V5h-5z");
}
</style><path class="qtnpfrbcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shelf-position-outline-sharp"} {...others} />);
}

export default Component;
