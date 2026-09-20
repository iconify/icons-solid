import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ar-oh8bhs {
  fill: currentColor;
  d: path("M3 21V9h3.616V3h6.5v3.616h-5.5V14H10V9h11v12z");
}
</style><path class="ar-oh8bhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:markunread-mailbox-sharp"} {...others} />);
}

export default Component;
