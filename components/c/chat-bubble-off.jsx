import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.epbchujxc {
  fill: currentColor;
  d: path("M19.7 16.966L5.85 3h13.535q.69 0 1.153.463T21 4.615v10.77q0 .65-.363 1.041q-.362.391-.937.54m.57 4.719L15.572 17H6.077L3 20.077V4.416L1.008 2.423l.707-.707l19.262 19.261z");
}
</style><path class="epbchujxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:chat-bubble-off"} {...others} />);
}

export default Component;
