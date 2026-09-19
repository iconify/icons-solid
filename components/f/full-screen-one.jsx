import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/aj1v0cbzm.css';
import '../../css/o/ok5_r338q.css';
import '../../css/k/ko8h4rbes.css';
import '../../css/t/t1i6xe2wc.css';
import '../../css/h/hf8fe3d2n.css';
import '../../css/u/uj-tbwz8n.css';
import '../../css/o/o51cz7q6l.css';
import '../../css/r/r_ktmtjwe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="aj1v0cbzm"/><path class="ok5_r338q"/><path class="ko8h4rbes"/><path class="t1i6xe2wc"/><path class="hf8fe3d2n"/><path class="uj-tbwz8n"/><path class="o51cz7q6l"/><path class="r_ktmtjwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:full-screen-one"} {...others} />);
}

export default Component;
