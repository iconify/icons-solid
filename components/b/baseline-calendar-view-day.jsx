import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aok6bmb8m {
  fill: currentColor;
  d: path("M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z");
}
</style><path class="aok6bmb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-calendar-view-day"} {...others} />);
}

export default Component;
