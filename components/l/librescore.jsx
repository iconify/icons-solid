import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dfttxdb_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.462 28.11c0 6.87-4.946 8.122-7.28 6.97c-3.12-1.541-2.54-7.597 7.28-6.97V11.67h19.13v19.604H43.5v5.058H27.374V21.154H13.462m13.564-4.822H13.462");
}
</style><path class="dfttxdb_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:librescore"} {...others} />);
}

export default Component;
