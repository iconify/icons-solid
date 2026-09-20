import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dulnyxb_t {
  fill: currentColor;
  d: path("M12 18q1.725-.425 2.863-1.987T16 12.55V10l-4-2l-4 2v2.55q0 1.9 1.138 3.463T12 18m-8 3V9l8-6l8 6v12z");
}
</style><path class="dulnyxb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:house-with-shield-sharp"} {...others} />);
}

export default Component;
