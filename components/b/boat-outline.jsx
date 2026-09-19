import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/pu2beabvv.css';
import '../../css/s/sxhhi-wtg.css';
import '../../css/z/zk4tyk1ns.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="pu2beabvv"/><path class="sxhhi-wtg"/><path class="zk4tyk1ns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:boat-outline"} {...others} />);
}

export default Component;
