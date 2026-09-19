import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.scfsvuyqo {
  cx: 23.831px;
  cy: 24px;
  r: 13.771px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zb7y9nb7g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.831 14.003V24h-9.997m23.458 2.914h3.97v-5.828H37.29m-5.67-8.441L30.441 4.5h-13.22l-1.179 8.145m0 22.71l1.179 8.145h13.22l1.179-8.145");
}
</style><circle class="scfsvuyqo"/><path class="zb7y9nb7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:watchmaker"} {...others} />);
}

export default Component;
