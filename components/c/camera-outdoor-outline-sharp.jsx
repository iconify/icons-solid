import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bmxedvvje {
  fill: currentColor;
  d: path("M12 18v-6h6v2l2-1.05v4.1L18 16v2zm-8 3V9l8-6l8 6v2h-2v-1l-6-4.5L6 10v9h14v2zm8-8.75");
}
</style><path class="bmxedvvje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:camera-outdoor-outline-sharp"} {...others} />);
}

export default Component;
