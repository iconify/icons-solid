import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n9a_lybsm.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/n/nv_660ntr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="n9a_lybsm"/><circle class="shu3xdl9q"/><path class="nv_660ntr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-circle-line-duotone"} {...others} />);
}

export default Component;
