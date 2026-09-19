import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.y_gxu5bhi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.736 9.461L24 3.5l10.264 5.961M24 15.422l-10.264-5.96v29.077M24 44.5V15.423L34.264 9.46v29.08");
}
</style><path class="y_gxu5bhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:armsx2"} {...others} />);
}

export default Component;
