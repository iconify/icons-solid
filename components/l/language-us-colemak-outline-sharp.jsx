import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tvyu1x31d {
  fill: currentColor;
  d: path("M14.5 15H18V9h-3.5zM4 17V7h6.5v2H6v6h4.5v2zm8.5 0V7H20v10z");
}
</style><path class="tvyu1x31d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:language-us-colemak-outline-sharp"} {...others} />);
}

export default Component;
