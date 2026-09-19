import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ou-cipbqs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.096 12.644L26.364 5.5l-12.02 7.57l-.512 14.289");
}

.xjom-0c0f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.247 11.62l10.966 7.456v15.825L27.418 42.5");
}

.zi8k4lqmo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.94 31.713l-12.36 6.689l-12.334-7.315l-.342-15.227");
}
</style><path class="ou-cipbqs"/><path class="xjom-0c0f"/><path class="zi8k4lqmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:coros"} {...others} />);
}

export default Component;
