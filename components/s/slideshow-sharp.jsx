import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cba9kcbbh {
  fill: currentColor;
  d: path("M9.885 15.577L15.462 12L9.885 8.423zM4 20V4h16v16z");
}
</style><path class="cba9kcbbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:slideshow-sharp"} {...others} />);
}

export default Component;
