import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jkdc9hz9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.019 40.704h5.962l10.741-10.741v10.74H42.5v-21.48zM24 32.944l18.5-18.487v-7.16L24 25.783L5.5 7.296v33.408h4.778V19.222z");
}
</style><path class="jkdc9hz9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:material-square-icon"} {...others} />);
}

export default Component;
