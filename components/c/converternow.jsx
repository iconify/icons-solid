import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qqp9j_4vg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.648 8.722a98.5 98.5 0 0 0-17.937 4.337M43.5 21.776H16.442C2.924 22.109 4.576 33.619 4.552 39.3M36.67 8.7L25.332 19.503m-4.51 4.297L4.552 39.3");
}
</style><path class="qqp9j_4vg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:converternow"} {...others} />);
}

export default Component;
