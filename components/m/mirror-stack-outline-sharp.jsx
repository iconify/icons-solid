import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w5u4-wb8u {
  fill: currentColor;
  d: path("M13.423 17.23v-1H18V4h-6.423v3.039h-1V3H19v14.23zM6 20h6.423V7.789H6zm-1 1V6.789h8.423V21zm1-1V7.789zM18 4.596V4v12.23z");
}
</style><path class="w5u4-wb8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mirror-stack-outline-sharp"} {...others} />);
}

export default Component;
