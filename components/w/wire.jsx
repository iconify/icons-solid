import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mt5f6pb4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 9.55V28.7a11.63 11.63 0 0 1-11.63 11.63h0A11.63 11.63 0 0 1 20.24 28.7V11.42A3.77 3.77 0 0 1 24 7.66h0");
}

.yrnmrjb0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 9.55V28.7a11.63 11.63 0 0 0 11.63 11.63h0A11.63 11.63 0 0 0 27.76 28.7V11.42A3.77 3.77 0 0 0 24 7.66h0");
}
</style><path class="yrnmrjb0g"/><path class="mt5f6pb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:wire"} {...others} />);
}

export default Component;
