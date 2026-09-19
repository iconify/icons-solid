import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j_mrucc6d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.926 7.382l-9.287 5.362l9.287 5.362l-9.287 5.362l9.287 5.362L43.5 18.106zM13.538 24.74L4.5 29.894l18.574 10.724l9.037-5.154z");
}
</style><path class="j_mrucc6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bonza"} {...others} />);
}

export default Component;
