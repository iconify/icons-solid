import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rfux-xbit {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 25.964c0 8.6-6.972 15.572-15.572 15.572s-15.572-6.972-15.572-15.572H4.5c0-10.77 8.73-19.5 19.5-19.5s19.5 8.73 19.5 19.5");
}

.s3310misf {
  cx: 27.928px;
  cy: 25.964px;
  r: 6.599px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="rfux-xbit"/><circle class="s3310misf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:camokat"} {...others} />);
}

export default Component;
