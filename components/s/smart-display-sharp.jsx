import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.velbbw06e {
  fill: currentColor;
  d: path("m9.5 16.5l7-4.5l-7-4.5zM2 20V4h20v16z");
}
</style><path class="velbbw06e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:smart-display-sharp"} {...others} />);
}

export default Component;
