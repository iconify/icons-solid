import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e7yl7ccep {
  fill: currentColor;
  d: path("m9.025 9l1.5 1.5H7.5v3h2V13H11v2H6V9zm-2.15-5H21v14.125l-2-2V6H8.875zM18 13v2h-.125l-1.5-1.5h.125V13zm-1.5-2v-.5h-2v1.125l-1.5-1.5V9h5v2zm-6.4 1.925V12.9zm-5.9-8.75L6.025 6H5v12h10.175L.675 3.5L2.1 2.075l19.8 19.8l-1.425 1.425l-3.3-3.3H3V4.175z");
}
</style><path class="e7yl7ccep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:closed-caption-disabled-outline-sharp"} {...others} />);
}

export default Component;
