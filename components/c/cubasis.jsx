import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c9xwdlbga {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.811 23.81c0-6.468 5.042-11.795 11.415-12.27l-7.04-7.04L5.687 24l19.5 19.5l7.42-7.42c-6.563-.285-11.795-5.612-11.795-12.27");
}

.glmo_u8sz {
  cx: 33.082px;
  cy: 24px;
  r: 5.232px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="glmo_u8sz"/><path class="c9xwdlbga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cubasis"} {...others} />);
}

export default Component;
