import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bv4_abj-g {
  fill: currentColor;
  d: path("M3 2h18v2H3zm0 18h18v2H3zm0-6h18v2H3zm0-6h18v2H3z");
}
</style><path class="bv4_abj-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-density-small"} {...others} />);
}

export default Component;
