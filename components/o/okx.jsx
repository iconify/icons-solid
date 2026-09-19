import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fe8fezwee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.167 17.833H17.833v12.334h12.334zM42.5 30.167H30.167V42.5H42.5zm0-24.667H30.167v12.333H42.5zM17.833 30.167H5.5V42.5h12.333zm0-24.667H5.5v12.333h12.333z");
}
</style><path class="fe8fezwee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:okx"} {...others} />);
}

export default Component;
