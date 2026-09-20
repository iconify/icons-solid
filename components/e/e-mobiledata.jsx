import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qo8v-yb4b {
  fill: currentColor;
  d: path("M8 17V7h8v2h-6v2h6v2h-6v2h6v2z");
}
</style><path class="qo8v-yb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:e-mobiledata"} {...others} />);
}

export default Component;
