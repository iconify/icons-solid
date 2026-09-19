import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.epqkxbccl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.073 24l-9.355-7.626v15.252zM8.381 5.5l13.337 10.874M8.381 42.5l13.337-10.874M31.073 24l2.56 2.087c2.7 1.964 3.836 7.39.586 10.976");
}

.skk_w8kas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.12 5.5H8.38v37h12.74A18.5 18.5 0 0 0 39.62 24h0a18.5 18.5 0 0 0-18.5-18.5");
}
</style><path class="skk_w8kas"/><path class="epqkxbccl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dailytube"} {...others} />);
}

export default Component;
