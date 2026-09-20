import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vzqebxbob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.105 33.644L9.099 18.638h8.649V5.5h12.714v13.138h8.648zM8.578 42.5h30.844v-3.647H8.578z");
}
</style><path class="vzqebxbob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:instadownload"} {...others} />);
}

export default Component;
