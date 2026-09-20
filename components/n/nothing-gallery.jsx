import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t8n2luorm {
  cx: 14.75px;
  cy: 14.75px;
  r: 6.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x6_mosuzq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 24zc0 10.21-8.29 18.5-18.5 18.5V24zm0 0zc10.21 0 18.5 8.29 18.5 18.5H24zM42.5 5.5zC42.5 15.71 34.21 24 24 24V5.5z");
}
</style><path class="x6_mosuzq"/><circle class="t8n2luorm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nothing-gallery"} {...others} />);
}

export default Component;
