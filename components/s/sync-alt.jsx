import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x0-sb2u1r {
  fill: currentColor;
  d: path("m7 21l-5-5l5-5l1.425 1.4l-2.6 2.6H21v2H5.825l2.6 2.6zm10-8l-1.425-1.4l2.6-2.6H3V7h15.175l-2.6-2.6L17 3l5 5z");
}
</style><path class="x0-sb2u1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sync-alt"} {...others} />);
}

export default Component;
