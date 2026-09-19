import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.amhwl3acz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.586 6.086l-16.5 16.5a2 2 0 0 0 0 2.828l16.5 16.5a2 2 0 0 0 2.828 0l16.5-16.5a2 2 0 0 0 0-2.828l-16.5-16.5a2 2 0 0 0-2.828 0");
}
</style><path class="amhwl3acz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:slidebox"} {...others} />);
}

export default Component;
