import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.g2sf3abkw {
  fill: currentColor;
  d: path("M5.5 7h9a.5.5 0 0 1 .5.5V9H5V7.5a.5.5 0 0 1 .5-.5M7 10v3H5.5a.5.5 0 0 1-.5-.5V10zm7.5 3H8v-3h7v2.5a.5.5 0 0 1-.5.5m-10-9A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4zm10 10h-9A1.5 1.5 0 0 1 4 12.5v-5A1.5 1.5 0 0 1 5.5 6h9A1.5 1.5 0 0 1 16 7.5v5a1.5 1.5 0 0 1-1.5 1.5");
}
</style><path class="g2sf3abkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:slide-layout-20-filled"} {...others} />);
}

export default Component;
