import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bxlbnswxu {
  fill: currentColor;
  d: path("M4 19v-2h16v2zm0-4v-2h16v2zm0-4V8.65L10 5l5 3.55L20 5v2.45L15 11L9.925 7.4z");
}
</style><path class="bxlbnswxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:legend-toggle-sharp"} {...others} />);
}

export default Component;
