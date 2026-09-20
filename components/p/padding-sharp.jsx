import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e_diuibdp {
  fill: currentColor;
  d: path("M7 9h2V7H7zm4 0h2V7h-2zm4 0h2V7h-2zM3 21V3h18v18z");
}
</style><path class="e_diuibdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:padding-sharp"} {...others} />);
}

export default Component;
