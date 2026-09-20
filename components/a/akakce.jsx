import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lpgjrdp9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.5 23.684a3.298 3.298 0 0 1 5.63-2.332l3.212 3.212l8.53-8.53a3.298 3.298 0 0 1 5.628 2.333c0 .875-.348 1.714-.966 2.333L22.983 32.25a2.32 2.32 0 0 1-3.283 0l-6.234-6.233a3.3 3.3 0 0 1-.966-2.333");
}
</style><circle class="cpk0fnbgt"/><path class="lpgjrdp9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:akakce"} {...others} />);
}

export default Component;
