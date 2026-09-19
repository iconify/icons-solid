import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ywt6bccyy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.333 17.833H24v12.334h12.333zM24 5.5H11.667v12.333H24zm0 12.333H11.667v12.334H24zm12.333 12.334H24V42.5h12.333z");
}
</style><path class="ywt6bccyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:block-puzzle-guardian"} {...others} />);
}

export default Component;
