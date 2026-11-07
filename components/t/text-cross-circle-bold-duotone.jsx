import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrdvcwidb.css';
import '../../css/t/t8f86fbfc.css';
import '../../css/m/m4styj0nb.css';
import '../../css/m/mz1do-bvr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrdvcwidb"/><path class="t8f86fbfc"/><path class="m4styj0nb"/><path class="mz1do-bvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-cross-circle-bold-duotone"} {...others} />);
}

export default Component;
