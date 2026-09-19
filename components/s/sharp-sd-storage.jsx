import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i2qvs1byi {
  fill: currentColor;
  d: path("M20 2H10L4 8v14h16zm-8 6h-2V4h2zm3 0h-2V4h2zm3 0h-2V4h2z");
}
</style><path class="i2qvs1byi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-sd-storage"} {...others} />);
}

export default Component;
