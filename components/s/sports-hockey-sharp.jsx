import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yojppbvpf {
  fill: currentColor;
  d: path("M2.77 19.116v-2.231h1.615v2.23zm2.615 0v-2.231h4.192l1.004-2.258l.677 1.462l-1.37 3.027zm14.23 0v-2.231h1.616v2.23zm-1 0h-4.503L7.735 4.885h1.35L12 11.43l2.916-6.546h1.35l-3.589 8.042l1.746 3.958h4.193z");
}
</style><path class="yojppbvpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sports-hockey-sharp"} {...others} />);
}

export default Component;
