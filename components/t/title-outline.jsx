import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tqz0xrkdc {
  fill: currentColor;
  d: path("M10.5 20V7H5V4h14v3h-5.5v13z");
}
</style><path class="tqz0xrkdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:title-outline"} {...others} />);
}

export default Component;
