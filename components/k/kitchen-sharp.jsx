import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qx_2-m0zn {
  fill: currentColor;
  d: path("M8 8h2V5H8zm0 9h2v-5H8zm-4 5V11h16v11zM4 9V2h16v7z");
}
</style><path class="qx_2-m0zn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:kitchen-sharp"} {...others} />);
}

export default Component;
