import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nxbg4kboo.css';
import '../../css/w/wl6o_vbql.css';
import '../../css/i/ijqtiz25w.css';
import '../../css/i/ixc2xrbzs.css';
import '../../css/d/dsj7due9x.css';
import '../../css/q/q4bk8jioe.css';
import '../../css/y/yfg54nhij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nxbg4kboo"/><path class="wl6o_vbql"/><path class="ijqtiz25w"/><path class="ixc2xrbzs"/><path class="dsj7due9x"/><path class="q4bk8jioe"/><path class="yfg54nhij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:champagne-cooler"} {...others} />);
}

export default Component;
