import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s6xoltbao {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 18.332h39m-39 0l6.204-11.896h26.591L43.5 18.332L24 41.564zM22.799 6.436l-6.123 11.896m14.648 0L25.201 6.436M24 18.332v23.232");
}
</style><path class="s6xoltbao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tkton-wallet"} {...others} />);
}

export default Component;
