import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rje4vxduh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.55 5.43a2.05 2.05 0 0 0-2 2.05v22.58a2.05 2.05 0 0 0 2.05 2.06h6l11.59 8a1 1 0 0 0 1.57-.82v-7.18h15.69a2.05 2.05 0 0 0 2-2.06V7.48a2.05 2.05 0 0 0-2-2.05Zm1.08 6.13h32.74M7.63 18.77h32.74M7.63 25.99H20.9");
}
</style><path class="rje4vxduh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nextcloudsms"} {...others} />);
}

export default Component;
