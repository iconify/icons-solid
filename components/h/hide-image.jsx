import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f22y5y1kl {
  fill: currentColor;
  d: path("M21 18.15L5.85 3H19q.825 0 1.413.588T21 5zm-1.2 4.45L18.2 21H5q-.825 0-1.412-.587T3 19V5.8L1.4 4.2l1.4-1.4l18.4 18.4zM6 17h8.175l-2.1-2.1l-.825 1.1L9 13z");
}
</style><path class="f22y5y1kl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:hide-image"} {...others} />);
}

export default Component;
