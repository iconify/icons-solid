import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sndizkbnm {
  fill: currentColor;
  d: path("M10.83 8H21V6H8.83zm5 5H18v-2h-4.17zM14 16.83V18h-4v-2h3.17l-3-3H6v-2h2.17l-3-3H3V6h.17L1.39 4.22L2.8 2.81l18.38 18.38l-1.41 1.41z");
}
</style><path class="sndizkbnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-filter-list-off"} {...others} />);
}

export default Component;
