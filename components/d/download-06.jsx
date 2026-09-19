import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xji65qz3r.css';
import '../../css/w/ww_kt-b2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xji65qz3r"/><path class="ww_kt-b2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:download-06"} {...others} />);
}

export default Component;
