import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kwwy-ku2e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.196 14.385v14.761h7.608m12.869-2.882V8.707c0-1.703-8.185-4.207-16.67-4.207S7.332 7.004 7.332 8.707l-.006 17.557c-.002 6.41 6.528 14.605 16.67 17.236c10.143-2.63 16.676-10.828 16.676-17.236");
}
</style><path class="kwwy-ku2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:line-official-account"} {...others} />);
}

export default Component;
