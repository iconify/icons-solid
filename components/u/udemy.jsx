import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.tb1s_sbgm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.858 15.824v18.335A9.305 9.305 0 0 0 24 43.5a9.305 9.305 0 0 0 9.142-9.34V15.823m-18.273-5.607L24 4.5l9.131 5.716");
}
</style><path class="tb1s_sbgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:udemy"} {...others} />);
}

export default Component;
