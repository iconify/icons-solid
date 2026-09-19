import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g9z1im7gb {
  cx: 18.946px;
  cy: 35.65px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 9.666px;
  ry: 7.696px;
}

.rbj-aybjm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.491 34.813V4.5C30.197 14.72 38.6 13.098 38.6 21.745c0 2.286-1.192 4.47-2.945 6.445");
}
</style><ellipse transform="rotate(-15.242 18.946 35.65)" class="g9z1im7gb"/><path class="rbj-aybjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nintendo-music"} {...others} />);
}

export default Component;
