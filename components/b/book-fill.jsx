import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i3rzc9w8m {
  fill: currentColor;
  d: path("M4 19V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10c0 1.27-.803 2.405-2 2.829V19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3m3-1a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1v-1Z");
}
</style><path class="i3rzc9w8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:book-fill"} {...others} />);
}

export default Component;
