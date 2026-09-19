import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q5uduuxtq {
  fill: currentColor;
  d: path("M2 9v2h19V9zm0 6h5v-2H2zm7 0h5v-2H9zm7 0h5v-2h-5z");
}
</style><path class="q5uduuxtq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-power-input"} {...others} />);
}

export default Component;
