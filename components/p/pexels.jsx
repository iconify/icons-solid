import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.nzszlsp8w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.048 4.5H9.568v39h10.006V33.269h4.474c7.944 0 14.385-6.44 14.385-14.385S31.993 4.5 24.048 4.5");
}
</style><path class="nzszlsp8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pexels"} {...others} />);
}

export default Component;
