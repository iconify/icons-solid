import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b36puhmia {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.167 40.5V30.167L24 24l-6.167 6.167V40.5a2 2 0 0 0 2 2h8.334a2 2 0 0 0 2-2");
}

.f4vd9p16i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.5 30.167h10.333L24 24l-6.167-6.167H7.5a2 2 0 0 0-2 2v8.334a2 2 0 0 0 2 2");
}

.ll7ldy65c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.833 7.5v10.333L24 24l6.167-6.167V7.5a2 2 0 0 0-2-2h-8.334a2 2 0 0 0-2 2");
}

.xxzw8xb-i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.5 17.833H30.167L24 24l6.167 6.167H40.5a2 2 0 0 0 2-2v-8.334a2 2 0 0 0-2-2");
}
</style><path class="ll7ldy65c"/><path class="xxzw8xb-i"/><path class="b36puhmia"/><path class="f4vd9p16i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fullroid"} {...others} />);
}

export default Component;
