import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m2t9gz_ls.css';
import '../../css/g/gg03weilf.css';
import '../../css/q/qt_qbll0w.css';
import '../../css/e/ei6c-pcgq.css';
import '../../css/d/d28jcob6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="m2t9gz_ls"/><path class="gg03weilf wm-k"/><path class="qt_qbll0w wm-a"/><path class="ei6c-pcgq wm-k"/><path class="d28jcob6c wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:trash-2-sketch"} {...others} />);
}

export default Component;
