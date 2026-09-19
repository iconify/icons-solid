import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ivoeacboo {
  cx: 24px;
  cy: 24px;
  r: 12.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vepl3kbui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5s1.361 6 4.861 6l.076-.033A18.5 18.5 0 0 0 5.5 24c0 10.217 8.283 18.5 18.5 18.5h18.5s-1.361-6-4.861-6l-.077.033A18.5 18.5 0 0 0 42.5 24c0-10.217-8.283-18.5-18.5-18.5z");
}

.wkxw5hbfm {
  cx: 24px;
  cy: 24px;
  r: 3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="vepl3kbui"/><circle class="ivoeacboo"/><circle class="wkxw5hbfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:laresmart"} {...others} />);
}

export default Component;
