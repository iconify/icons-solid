import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m5yv8g59w {
  fill: currentColor;
  d: path("M2 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.586l2.293-2.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414L18.414 13H21a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a5 5 0 0 1-5-5Zm16.586 7L15 6.414l-3 3v7.172ZM20 20v-5h-3.586l-5 5ZM7 16a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="m5yv8g59w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:swatches-fill-sharp"} {...others} />);
}

export default Component;
