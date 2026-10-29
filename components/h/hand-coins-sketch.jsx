import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/ba0ujbcbx.css';
import '../../css/q/qmveuub9a.css';
import '../../css/x/xrmjuk50y.css';
import '../../css/t/tdo3ihb9n.css';
import '../../css/a/avtmk6b7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ba0ujbcbx"/><path class="qmveuub9a wm-k"/><path class="wm-a xrmjuk50y"/><path class="tdo3ihb9n wm-k"/><path class="avtmk6b7z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hand-coins-sketch"} {...others} />);
}

export default Component;
