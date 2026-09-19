import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.inkgmu70s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.742 31.657l.556-5.225l1.778-16.584H11.119l1.751 17.168l.475 4.641m22.626 6.495l-27.846-1.69L5.5 31.661h37zm-1.673-11.72l-21.428.584");
}
</style><path class="inkgmu70s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cartola"} {...others} />);
}

export default Component;
