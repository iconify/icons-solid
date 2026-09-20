import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zruhqpb6m {
  fill: currentColor;
  d: path("M3 20V4h2v16zm9-3l-5-5l5-5l1.4 1.4l-2.6 2.6H21v2H10.8l2.6 2.6z");
}
</style><path class="zruhqpb6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:horizontal-align-left-outline-sharp"} {...others} />);
}

export default Component;
