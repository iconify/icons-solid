import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rqbbopv3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 4.5l16 8.05v22.9l-16 8l-16-8V28l16 8l9.42-4.75v-8L24 28L8 20v-7.45Zm0 7.42l-8.62 4.34L24 20.61l8.62-4.35Z");
}
</style><path class="rqbbopv3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:gag"} {...others} />);
}

export default Component;
