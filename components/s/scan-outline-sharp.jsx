import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qx3apj_1v {
  fill: currentColor;
  d: path("M4 22v-5h2v3h12v-3h2v5zm0-11V2h10l6 6v3h-2V9h-5V4H6v7zm-3 4v-2h22v2zm11 2");
}
</style><path class="qx3apj_1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:scan-outline-sharp"} {...others} />);
}

export default Component;
