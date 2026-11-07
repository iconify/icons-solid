import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxbhz1bxu.css';
import '../../css/w/w482_wbjc.css';
import '../../css/z/zs0elrbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xxbhz1bxu"/><path class="w482_wbjc"/><path class="zs0elrbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layout-freeform-bold-duotone"} {...others} />);
}

export default Component;
