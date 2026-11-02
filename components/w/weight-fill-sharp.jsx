import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a7dy-vbon {
  fill: currentColor;
  d: path("M14.829 7H17a1 1 0 0 1 .97.757l3 12A.998.998 0 0 1 20 21H4a.998.998 0 0 1-.97-1.243l3-12A1 1 0 0 1 7 7h2.171a3 3 0 1 1 5.658 0m-3.536-1.707a.999.999 0 1 0 1.414 1.414a.999.999 0 1 0-1.414-1.414");
}
</style><path class="a7dy-vbon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:weight-fill-sharp"} {...others} />);
}

export default Component;
