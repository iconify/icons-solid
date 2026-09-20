import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.drdne8bss {
  fill: currentColor;
  d: path("M4 18v-6h16v6zm0-8V9h16v1zm0-3V6h16v1z");
}
</style><path class="drdne8bss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:horizontal-split-sharp"} {...others} />);
}

export default Component;
