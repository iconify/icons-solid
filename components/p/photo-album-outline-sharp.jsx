import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a3vsp7blu {
  fill: currentColor;
  d: path("M4 22V2h16v20zm2-2h12V4h-2v7l-2.5-1.5L11 11V4H6zm1-2h10l-3.375-4.5L11 17l-1.625-2.175zm-1 2V4zm5-9l2.5-1.5L16 11l-2.5-1.5z");
}
</style><path class="a3vsp7blu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:photo-album-outline-sharp"} {...others} />);
}

export default Component;
