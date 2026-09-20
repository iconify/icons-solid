import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wtgih872k {
  fill: currentColor;
  d: path("M4 20V4h2.954L12 17.339L17.015 4H20v16h-1.846V6.366L12.89 20h-1.8L5.846 6.46V20z");
}
</style><path class="wtgih872k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:metro-outline"} {...others} />);
}

export default Component;
