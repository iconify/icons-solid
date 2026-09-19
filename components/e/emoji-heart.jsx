import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xtzuxgsuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 12.124c-1.745-2.892-4.908-4.833-8.532-4.833c-5.505 0-9.968 4.463-9.968 9.968c0 1.258.243 2.457.669 3.566C9.465 30.305 24 40.709 24 40.709s14.535-10.403 17.831-19.884a9.9 9.9 0 0 0 .669-3.566c0-5.505-4.463-9.968-9.968-9.968c-3.624 0-6.787 1.94-8.532 4.833");
}
</style><path class="xtzuxgsuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-heart"} {...others} />);
}

export default Component;
