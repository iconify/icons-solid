import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m1uhldb5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.01 23.916l2.728 4.178l7.002-15.692h7.544c6.447-.022 9.221 5.64 9.216 11.772c-.005 6.131-2.81 11.404-8.315 11.425h-6.771V21.028m3.578-3.868v13.822");
}

.s0hmlsbnn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 35.599l9.938-23.197L20.2 20.54");
}
</style><path class="s0hmlsbnn"/><path class="m1uhldb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:massdroid"} {...others} />);
}

export default Component;
