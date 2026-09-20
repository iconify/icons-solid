import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ak1734bru {
  fill: currentColor;
  d: path("M7 21V3h10v18zm1-1h8V4H8zm0 0V4z");
}
</style><path class="ak1734bru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:crop-2-3-outline-sharp"} {...others} />);
}

export default Component;
