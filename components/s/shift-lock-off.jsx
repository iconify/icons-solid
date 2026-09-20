import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fgmhbgb2w {
  fill: currentColor;
  d: path("M4 22v-2h16v2zm4-4v-5H3l4.5-5.525l8.5 8.5V18zm7.85-5L8.775 5.925L12 2l9 11zm4.625 10.3L.675 3.5L2.1 2.075l19.8 19.8z");
}
</style><path class="fgmhbgb2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shift-lock-off"} {...others} />);
}

export default Component;
