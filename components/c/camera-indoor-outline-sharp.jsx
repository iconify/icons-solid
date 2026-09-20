import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g2m44yb1y {
  fill: currentColor;
  d: path("M8 17h6v-2l2 1.05v-4.1L14 13v-2H8zm-4 4V9l8-6l8 6v12zm2-2h12v-9l-6-4.5L6 10zm6-6.75");
}
</style><path class="g2m44yb1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:camera-indoor-outline-sharp"} {...others} />);
}

export default Component;
