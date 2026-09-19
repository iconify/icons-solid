import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h9r27b6ce {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.82 40.429A21.5 21.5 0 1 1 22.127 2.541m3.747-.001a21.5 21.5 0 0 1 14.597 35.24");
}
</style><path class="h9r27b6ce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:disky"} {...others} />);
}

export default Component;
