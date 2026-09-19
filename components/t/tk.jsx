import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vzfuyvkjr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 8.75h23.72v7.78H20.9v11.34h-9.08V16.53H4.5Zm27.78 7.75H43.5L32.12 27.87L43.5 39.25H32.28L20.9 27.87Zm0 0");
}
</style><path class="vzfuyvkjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tk"} {...others} />);
}

export default Component;
