import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c2rpjybzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.652 42.5l-4.672-7.023l13.044-6.682c6.388-3.273 8.324-10.803 4.322-16.819S26.922 3.737 20.533 7.01l-10.6 5.43c-3.354 1.718-4.37 5.671-2.27 8.83c2.101 3.157 6.523 4.324 9.877 2.606l9.395-4.813");
}
</style><path class="c2rpjybzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:clip-studio"} {...others} />);
}

export default Component;
