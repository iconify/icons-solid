import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d3dq-sznu {
  fill: currentColor;
  d: path("M3 20v-1h18v1zm0-3v-2h18v2zm0-4v-3h18v3zm0-5V4h18v4z");
}
</style><path class="d3dq-sznu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-weight"} {...others} />);
}

export default Component;
