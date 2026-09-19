import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dgvjne8gv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.5 30.5A6.5 6.5 0 1 0 24 37v-6.5zm13-13a6.5 6.5 0 1 0 0-13H24v13zm-13-13a6.5 6.5 0 1 0 0 13H24v-13zm0 13a6.5 6.5 0 1 0 0 13H24v-13z");
}

.oe8unhbgc {
  cx: 30.5px;
  cy: 24px;
  r: 6.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="oe8unhbgc"/><path class="dgvjne8gv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:figma"} {...others} />);
}

export default Component;
