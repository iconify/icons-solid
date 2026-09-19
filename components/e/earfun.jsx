import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xzy5v0-gz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.5 5.5h5.368c2.263 0 4.1 1.838 4.1 4.1v3.326H6.5zm25.532 0h5.367A4.103 4.103 0 0 1 41.5 9.6v3.326h-9.468zm0 12.947V36.9H20.77a4.8 4.8 0 0 1-4.802-4.802v-13.65H6.5v11.169c0 7.115 5.768 12.883 12.883 12.883H41.5V18.447z");
}
</style><path class="xzy5v0-gz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:earfun"} {...others} />);
}

export default Component;
