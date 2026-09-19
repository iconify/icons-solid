import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.uwz15z91o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 40.302V14.639a2.74 2.74 0 0 1 2.742-2.742h19.095c.965 0 1.513 1.104.93 1.873L7.596 41.007c-.676.89-2.097.413-2.097-.705M42.5 7.698v25.663a2.74 2.74 0 0 1-2.742 2.742H20.663a1.167 1.167 0 0 1-.93-1.873l20.67-27.237c.676-.89 2.097-.413 2.097.705");
}
</style><path class="uwz15z91o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:zapmail"} {...others} />);
}

export default Component;
