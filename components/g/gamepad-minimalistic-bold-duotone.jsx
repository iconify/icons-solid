import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/st-nwbl4q.css';
import '../../css/w/wr5pdbbjh.css';
import '../../css/q/qut6jfbbn.css';
import '../../css/h/h_l-sqbdb.css';
import '../../css/w/w8mj0cb0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="st-nwbl4q"/><path class="wr5pdbbjh"/><path class="qut6jfbbn"/><path class="h_l-sqbdb"/><path class="w8mj0cb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:gamepad-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
