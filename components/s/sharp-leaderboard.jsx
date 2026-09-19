import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hz-fvomwi {
  fill: currentColor;
  d: path("M7.5 21H2V9h5.5zm7.25-18h-5.5v18h5.5zM22 11h-5.5v10H22z");
}
</style><path class="hz-fvomwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-leaderboard"} {...others} />);
}

export default Component;
