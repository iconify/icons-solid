import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j87swicgp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.125 24.375v9.75m26-16.25v9.75a6.5 6.5 0 1 1-13 0v-3.25a6.5 6.5 0 1 0-13 0a6.5 6.5 0 1 0-13 0v9.75");
}

.s9j0sdb8z {
  cx: 43.125px;
  cy: 14.625px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="j87swicgp"/><circle class="s9j0sdb8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:muni"} {...others} />);
}

export default Component;
