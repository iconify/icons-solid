import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.w4ysmhb3g {
  fill: currentColor;
  d: path("M7.876 1.878a3 3 0 0 1 4.243 0l5.999 5.998a3 3 0 0 1 0 4.244l-5.999 5.998a3 3 0 0 1-4.243 0L1.878 12.12a3 3 0 0 1 0-4.244zm3.536.707a2 2 0 0 0-2.829 0L2.585 8.583a2.004 2.004 0 0 0 0 2.83l5.998 5.998c.781.78 2.048.78 2.83 0l5.997-5.999a2 2 0 0 0 0-2.829z");
}
</style><path class="w4ysmhb3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:diamond-20-regular"} {...others} />);
}

export default Component;
