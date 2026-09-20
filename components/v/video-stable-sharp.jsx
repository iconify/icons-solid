import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y0n3o4b_x {
  fill: currentColor;
  d: path("M3 19V5h18v14zm13.975-1l2.3-8.689L7.075 6l-2.3 8.63z");
}
</style><path class="y0n3o4b_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:video-stable-sharp"} {...others} />);
}

export default Component;
