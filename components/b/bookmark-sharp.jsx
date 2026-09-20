import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n889bjj8d {
  fill: currentColor;
  d: path("M6 19.5V4h12v15.5l-6-2.583z");
}
</style><path class="n889bjj8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bookmark-sharp"} {...others} />);
}

export default Component;
