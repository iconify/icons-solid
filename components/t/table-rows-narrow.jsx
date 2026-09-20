import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iw4ge6bvv {
  fill: currentColor;
  d: path("M3 15.5V13h18v2.5zM3 11V8.5h18V11zm0-4.5V4h18v2.5zM3 20v-2.5h18V20z");
}
</style><path class="iw4ge6bvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:table-rows-narrow"} {...others} />);
}

export default Component;
