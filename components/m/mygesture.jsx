import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hmy09qk1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.17 12.825C27.72-1.271 13.896 2.597 13.388 11.389c-.488 14.058 15.781.225 16.022 12.101c-.036 4.503-.125 9.77-.088 14.252c-1.483 15.294-19.446.64-12.552-5.046c5.084-4.785 17.854-9.334 17.854-9.334");
}
</style><path class="hmy09qk1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mygesture"} {...others} />);
}

export default Component;
