import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.q1n9c8blm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36 37h5m-5 3h5m4.5-1.5a7 7 0 1 1-14 0a7 7 0 0 1 14 0M23.397 14.664V25.45l9.93 5.734m.117 12.131A21.5 21.5 0 0 1 24 45.5C12.126 45.5 2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24h0a21.5 21.5 0 0 1-2.177 9.428");
}
</style><path class="q1n9c8blm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cron"} {...others} />);
}

export default Component;
