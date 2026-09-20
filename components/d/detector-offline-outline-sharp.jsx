import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vd1pmmbym {
  fill: currentColor;
  d: path("M9.4 21L8 19.6l2.6-2.6L8 14.4L9.4 13l2.6 2.6l2.6-2.6l1.4 1.4l-2.6 2.6l2.6 2.6l-1.4 1.4l-2.6-2.6zM5 5v1h14V5zm3.1 3l.3 1h7.2l.3-1zm-1.15 3L6 8H3V3h18v5h-3l-1.15 3zM5 5v1z");
}
</style><path class="vd1pmmbym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:detector-offline-outline-sharp"} {...others} />);
}

export default Component;
