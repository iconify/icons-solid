import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m8indo9ou {
  fill: currentColor;
  d: path("m9.75 22l-1.7-3h-3.3L2.5 15l1.7-3l-1.7-3l2.25-4h3.3l1.7-3h4.5l1.7 3h3.3l2.25 4l-1.7 3l1.7 3l-2.25 4h-3.3l-1.7 3zm6.2-11h2.15l1.1-2l-1.1-2h-2.15l-1.125 2zm-5 3h2.1l1.125-2l-1.125-2h-2.1l-1.125 2zm0-6h2.1l1.15-2.025L13.075 4h-2.15L9.8 5.975zm-5.025 3H8.05l1.125-2L8.05 7H5.925L4.8 9zm0 6H8.05l1.125-2l-1.125-2H5.9l-1.1 2zm5 3h2.15l1.125-1.975L13.05 16h-2.1L9.8 18.025zm5.025-3h2.125l1.125-2l-1.125-2H15.95l-1.125 2z");
}
</style><path class="m8indo9ou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:hive-outline-sharp"} {...others} />);
}

export default Component;
