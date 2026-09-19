import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c6j4q5bhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.5 12l6.749-7.5h-19.5c-9 0-15 11.25-9.75 18C12 18 18 12 21 12zm-21 24l-6.749 7.5H26.25c9 0 14.999-11.25 9.75-18C36 30 30 36 27 36z");
}

.f7wqasbkf {
  cx: 24px;
  cy: 24px;
  r: 9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="c6j4q5bhh"/><circle class="f7wqasbkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:scotiabank"} {...others} />);
}

export default Component;
