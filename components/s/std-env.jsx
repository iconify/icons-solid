import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd72m_82q.css';
import '../../css/l/ly3ruhirx.css';
import '../../css/n/nqj3jfxks.css';
import '../../css/v/vvqs67bnh.css';
import '../../css/o/omxe52rmf.css';
import '../../css/y/ycymssbrl.css';
import '../../css/x/xgvf3vs2p.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="pd72m_82q"/><path class="ly3ruhirx"/><path class="nqj3jfxks"/><path class="vvqs67bnh"/><path class="omxe52rmf"/><path class="ycymssbrl"/><path class="xgvf3vs2p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:std-env"} {...others} />);
}

export default Component;
