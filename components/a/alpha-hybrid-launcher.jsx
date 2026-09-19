import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b0yqp7bau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 35.802L27.008 7.237L12.883 31.702");
}

.k9gpwnbef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.992 7.237L4.5 35.802h27.732");
}

.v_hdt_7ig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.508 40.763h32.984L27.008 17.407");
}
</style><path class="v_hdt_7ig"/><path class="b0yqp7bau"/><path class="k9gpwnbef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:alpha-hybrid-launcher"} {...others} />);
}

export default Component;
