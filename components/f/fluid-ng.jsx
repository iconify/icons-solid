import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.q9xkc6bkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.162 26.96H17.108a8.27 8.27 0 0 0-8.27 8.27a8.27 8.27 0 0 0 8.27 8.27h22.054m-19.324-39h8.324a11 11 0 0 1 11 11v5.54H8.838V15.5a11 11 0 0 1 11-11");
}
</style><path class="q9xkc6bkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fluid-ng"} {...others} />);
}

export default Component;
