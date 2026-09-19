import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eg8ef3o9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 25.641c-.527 6.57-.381 11.005-3.368 12.715l-10.725-19.81c-2.987 1.71-2.842 6.147-3.336 11.427c-.495 5.28-1.306 7.155-3.109 8.14L10.988 9.228c-1.802.985-2.613 2.86-2.903 5.551L5.5 38.772");
}
</style><path class="eg8ef3o9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:netwing"} {...others} />);
}

export default Component;
