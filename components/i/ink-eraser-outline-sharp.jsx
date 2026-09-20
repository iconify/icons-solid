import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.db47-nbmf {
  fill: currentColor;
  d: path("M17.25 18H22v2h-6.75zm-12.5 2L1.2 16.45L15 2.15l7.8 7.8L13 20zm7.4-2L20 9.95L15.05 5L4 16.4L5.6 18zM12 12");
}
</style><path class="db47-nbmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ink-eraser-outline-sharp"} {...others} />);
}

export default Component;
