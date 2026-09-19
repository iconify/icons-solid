import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.w-26hc8kq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.112 10.833V4.5h-19.89v13.555h-4.334v4.334h4.334v3.444h-4.334v4.334h4.334V43.5h7.667V30.167h6.777l2-4.334H23.89V22.39h10.333l1.889-4.334H23.889v-7.222z");
}
</style><path class="w-26hc8kq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ffb"} {...others} />);
}

export default Component;
