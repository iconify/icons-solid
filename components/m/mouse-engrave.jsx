import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sb5v5hbei.css';
import '../../css/o/oghnc41ik.css';
import '../../css/l/l7k0l-tlx.css';
import '../../css/m/mm8lkn_5j.css';
import '../../css/d/dxo27vb0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sb5v5hbei wm-k"/><path class="oghnc41ik wm-a"/><path class="l7k0l-tlx wm-shadow"/><path class="mm8lkn_5j wm-k"/><path class="dxo27vb0f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mouse-engrave"} {...others} />);
}

export default Component;
