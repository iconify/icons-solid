import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cd3xp2y2d {
  fill: currentColor;
  d: path("M18 17h-7l5-5l-5-5h7V4H6v2l6.5 6L6 18v2h12z");
}
</style><path class="cd3xp2y2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-functions"} {...others} />);
}

export default Component;
