import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.atelugguy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.196 5.5L5.632 7.987l18.024 17.907l-4.822 4.898L30.62 42.5l11.748-12.091l-11.94-11.708l-4.285 4.476z");
}
</style><path class="atelugguy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:empty-folder-cleaner"} {...others} />);
}

export default Component;
