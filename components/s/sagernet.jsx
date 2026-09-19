import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.uhahi1bel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 6.838L36.02 35.42l-14.433-4.528l11.827-14.75l-15.731 13.57L5.5 25.407ZM28.573 33.09l-7.154 8.073l.168-10.27");
}
</style><path class="uhahi1bel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sagernet"} {...others} />);
}

export default Component;
