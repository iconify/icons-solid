import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vwx2fab_g {
  fill: currentColor;
  d: path("M4 21v-1h16v1zm0-5.673v-1h16v1zm0-5.654v-1h16v1zM4 4V3h16v1z");
}
</style><path class="vwx2fab_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:density-small-outline-sharp"} {...others} />);
}

export default Component;
