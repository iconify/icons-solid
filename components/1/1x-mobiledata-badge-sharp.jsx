import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.szx627b0x {
  fill: currentColor;
  d: path("M7 17h2V7H5v2h2zm4.5 0h2l1.75-3.175L17 17h2l-2.75-5L19 7h-2l-1.75 3.175L13.5 7h-2l2.75 5zM1 21V3h22v18z");
}
</style><path class="szx627b0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:1x-mobiledata-badge-sharp"} {...others} />);
}

export default Component;
