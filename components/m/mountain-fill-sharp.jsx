import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h8x7s6bbu {
  fill: currentColor;
  d: path("M9.106 4.553a.998.998 0 0 1 1.788 0L13 8.764l1.106-2.211a.998.998 0 0 1 1.788 0l6 12A1 1 0 0 1 21 20H3a1 1 0 0 1-.894-1.447Z");
}
</style><path class="h8x7s6bbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mountain-fill-sharp"} {...others} />);
}

export default Component;
