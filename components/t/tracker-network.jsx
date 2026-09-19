import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.veoqjsaod {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 16.986h25.673V24H23.19m1.987 0l4.294 7.014M11.234 16.986v14.028m8.417-14.028v14.028M43.5 16.986v14.028l-9.119-14.028v14.028");
}
</style><path class="veoqjsaod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tracker-network"} {...others} />);
}

export default Component;
