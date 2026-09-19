import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.os51j2zfq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.564 28.34c2.938 3.981 7.663 6.564 12.99 6.564c8.912 0 16.135-7.223 16.135-16.134c0-5.5-2.752-10.357-6.955-13.27c8.415 1.832 14.702 9.32 14.702 18.284c0 10.337-8.379 18.716-18.715 18.716c-8.77 0-16.127-6.02-18.158-14.16");
}
</style><path class="os51j2zfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-crescent-moon"} {...others} />);
}

export default Component;
