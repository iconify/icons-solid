import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhwhbdcmq.css';
import '../../css/x/x_z5bwewf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mhwhbdcmq"/><path class="x_z5bwewf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openlist"} {...others} />);
}

export default Component;
