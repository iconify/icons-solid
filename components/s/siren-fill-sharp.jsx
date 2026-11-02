import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hyjxjxzna {
  fill: currentColor;
  d: path("M11 5V3a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0M6.707 6.293a.999.999 0 1 1-1.414 1.414l-2-2a.999.999 0 1 1 1.414-1.414Zm12 1.414a1 1 0 0 1-1.414-1.414l2-2a.999.999 0 1 1 1.414 1.414ZM19 16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2v-3a5 5 0 0 1 10 0v3Zm-6-1v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0");
}
</style><path class="hyjxjxzna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:siren-fill-sharp"} {...others} />);
}

export default Component;
