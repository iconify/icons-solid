import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vack09bmc.css';
import '../../css/z/zno_he9df.css';
import '../../css/m/mxe9l_zuc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vack09bmc"/><path class="zno_he9df"/><path class="mxe9l_zuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:atom-bold-duotone"} {...others} />);
}

export default Component;
