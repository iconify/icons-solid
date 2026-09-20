import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ga95htbrm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.2 4.5l5.55 5.55l-5.55 5.549l-5.55-5.55zm5.548 39H12.252V10.527h7.01v25.766h16.486z");
}
</style><path class="ga95htbrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:luminor-latvia"} {...others} />);
}

export default Component;
