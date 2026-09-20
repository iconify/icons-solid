import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f_oy41b1k {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h16V6H4zm12.975 0l2.3-8.65L7.075 6l-2.3 8.65zm-1.425-2.45l-8.325-2.3L8.5 8.45l8.325 2.3zM4 18V6z");
}
</style><path class="f_oy41b1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:video-stable-outline-sharp"} {...others} />);
}

export default Component;
