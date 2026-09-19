import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hnzwhpwsy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 27.95l19.5-10.43L24 8.13L4.5 17.52z");
}

.qctd-ubtm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.37 20.66L4.5 23.48L24 33.91l19.5-10.43l-5.87-2.82");
}

.y_8s3xb8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.37 26.62L4.5 29.44L24 39.87l19.5-10.43l-5.87-2.82");
}
</style><path class="hnzwhpwsy"/><path class="qctd-ubtm"/><path class="y_8s3xb8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:authenticator-alt-1"} {...others} />);
}

export default Component;
