import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/obpt3dxcu.css';
import '../../css/u/u97m_wqmn.css';
import '../../css/f/fd_ey44uj.css';
import '../../css/t/te2kq6bpo.css';
import '../../css/g/gilv6ob-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="obpt3dxcu"/><path clip-rule="evenodd" class="u97m_wqmn"/><path class="fd_ey44uj"/><path class="te2kq6bpo"/><path class="gilv6ob-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:printer-duotone"} {...others} />);
}

export default Component;
