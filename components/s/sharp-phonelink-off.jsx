import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uaabkxbol {
  fill: currentColor;
  d: path("m4.56 4l-2.5-2.49zM24 8h-8v4.61l2 2V10h4v7h-1.61l3 3H24zm-2-2V4H7.39l2 2zM2.06 1.51L.65 2.92L2 4.27V17H0v3h17.73l2.35 2.35l1.41-1.41zM4 17V6.27L14.73 17z");
}
</style><path class="uaabkxbol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-phonelink-off"} {...others} />);
}

export default Component;
