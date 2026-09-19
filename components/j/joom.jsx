import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b4c-4tb4i {
  cx: 16.227px;
  cy: 38.027px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5.433px;
  ry: 5.414px;
}

.tvtg0uztd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.621 43.5V16.89c0-7.758 6.855-12.266 11.551-12.39l.034 26.813c.012 9.423-8.289 12.18-11.585 12.187");
}
</style><ellipse class="b4c-4tb4i"/><path class="tvtg0uztd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:joom"} {...others} />);
}

export default Component;
