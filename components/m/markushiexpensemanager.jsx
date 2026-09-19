import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m2v6vdxtr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.961 13.065h7.518v21.87H6.961zm13.832 5.467h7.518v16.402h-7.518zm14.201 8.885h7.518v7.518h-7.518z");
}

.x08ci9bjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 34.924l14.294-11.49L31.27 27.93l12.23-9.427");
}
</style><path class="m2v6vdxtr"/><path class="x08ci9bjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:markushiexpensemanager"} {...others} />);
}

export default Component;
