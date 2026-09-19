import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.nf-6ef8wy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.78 8.8c3.85-3.93 9.47-3.67 13.38.68c2.5 2.76 3.76 8.56-.42 12.27m-33.55 0C3 18 4.27 12.24 6.76 9.48c3.92-4.35 9.53-4.61 13.38-.68m2.16 20.31l10.26-10.26Zm0 0l-6.85-6.85");
}

.vad2gho8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 42.78a17.21 17.21 0 1 1 17.2-17.2A17.2 17.2 0 0 1 24 42.78");
}
</style><path class="vad2gho8l"/><path class="nf-6ef8wy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sleepcycle"} {...others} />);
}

export default Component;
