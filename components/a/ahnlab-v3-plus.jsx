import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.n2bkccczq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 10.097v27.806l27.807-27.806M20.72 22.684H33l-5.658 5.658h3.952c1.423 0 2.135 1.72 1.129 2.726l-6.835 6.835m12.71-7.609v-8.405m-4.203 4.202H42.5");
}
</style><path class="n2bkccczq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ahnlab-v3-plus"} {...others} />);
}

export default Component;
