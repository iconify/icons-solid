import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rzw6xn-lt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.1 16.2h7.8V24h-7.8zm0 15.6h7.8v7.8h-7.8zm7.8-23.4h7.8v7.8h-7.8zm7.8 7.8h7.8V24h-7.8zM12.3 8.4h7.8v7.8h-7.8zM27.9 24h7.8v7.8h-7.8zm-15.6 0h7.8v7.8h-7.8zm-7.8-7.8h7.8V24H4.5z");
}
</style><path class="rzw6xn-lt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ultimate-software"} {...others} />);
}

export default Component;
