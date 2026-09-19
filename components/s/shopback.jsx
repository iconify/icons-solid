import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s8dhyfbtk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.668 17.41L30.075 4.5L16.307 17.817c-1.928 1.864-1.325 3.453 1.584 3.453h10.57c3.646 0 3.089 1.585.634 3.771l-4.234 3.772l5.214-.9c2.873-.495 4.007 1.735.777 4.15L15.558 43.5l6.164-18.604");
}
</style><path class="s8dhyfbtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:shopback"} {...others} />);
}

export default Component;
