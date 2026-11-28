import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tgy8uab8v.css';
import '../../css/z/zyu_u8bwt.css';
import '../../css/n/nijo91b6q.css';
import '../../css/l/lbcpzmq3a.css';
import '../../css/e/e3qz36b2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tgy8uab8v"/><path class="zyu_u8bwt"/><path class="nijo91b6q"/><path class="lbcpzmq3a"/><path class="e3qz36b2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-sync"} {...others} />);
}

export default Component;
