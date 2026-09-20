import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mgai3o1sj {
  fill: currentColor;
  d: path("M20.475 23.3L16 18.8l-4 4L1.2 12l4-4L.675 3.5L2.1 2.075l19.8 19.8zm-8.8-8.8L10.6 15.6L12 17l1.1-1.1zm7.175 1.45l-2.9-2.9L17 12l-5-5l-1.05 1.05l-2.9-2.9L12 1.2L22.8 12zM7 11v2h3.175l-2-2z");
}
</style><path class="mgai3o1sj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:directions-alt-off-sharp"} {...others} />);
}

export default Component;
