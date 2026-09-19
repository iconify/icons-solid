import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xhqx4obvk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.895 14.269h13.069m-14.262 6.84h13.069M4.5 33.731h13.069M43.5 14.269l-3.537 19.462h-8.57m-8.254 0l3.537-19.462h11.55m-12.793 6.84h11.56");
}
</style><path class="xhqx4obvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fastlyrics"} {...others} />);
}

export default Component;
