import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g2z2vcbwf {
  fill: currentColor;
  d: path("M4 21v-6h16v6h-2v-4H6v4zm-1-7v-3h3v3zm4 0V3h10v11zm11 0v-3h3v3z");
}
</style><path class="g2z2vcbwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:event-seat-sharp"} {...others} />);
}

export default Component;
