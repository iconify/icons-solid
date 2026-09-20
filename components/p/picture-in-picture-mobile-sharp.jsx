import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.evkeupb5s {
  fill: currentColor;
  d: path("M19 21H5V3h14zm-2.039-8.308V5H11.27v7.692z");
}
</style><path class="evkeupb5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:picture-in-picture-mobile-sharp"} {...others} />);
}

export default Component;
