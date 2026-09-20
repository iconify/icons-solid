import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vkbu0cc0g {
  fill: currentColor;
  d: path("M14 18V6h3.5v12zm-7.5 0V6H10v12z");
}
</style><path class="vkbu0cc0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:pause-sharp"} {...others} />);
}

export default Component;
