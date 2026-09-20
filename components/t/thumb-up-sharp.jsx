import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l5ct4aboz {
  fill: currentColor;
  d: path("M8 21V8l7-7l1.85 1.85L15.55 8H23v4.4L19.35 21zm-6 0V8h4v13z");
}
</style><path class="l5ct4aboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:thumb-up-sharp"} {...others} />);
}

export default Component;
