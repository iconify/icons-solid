import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.waf4xobye {
  fill: currentColor;
  d: path("M3 22v-2h18v2zm0-6v-2h18v2zm0-6V8h18v2zm0-6V2h18v2z");
}
</style><path class="waf4xobye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:density-small-sharp"} {...others} />);
}

export default Component;
