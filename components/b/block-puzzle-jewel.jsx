import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d4jkwuzsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5h12.333v12.333H24zm-12.333 0H24v12.333H11.667zM24 17.833h12.333v12.334H24zm0 12.334h12.333V42.5H24z");
}
</style><path class="d4jkwuzsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:block-puzzle-jewel"} {...others} />);
}

export default Component;
