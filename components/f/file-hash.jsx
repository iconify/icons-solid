import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/e/euce6ob-r.css';
import '../../css/p/pv2ur-63o.css';
import '../../css/k/kkzgfy8qv.css';
import '../../css/h/hp_i4jbib.css';
import '../../css/g/g8vdyobvm.css';
import '../../css/w/wm7z6m_wg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="euce6ob-r"/><path class="pv2ur-63o"/><path class="kkzgfy8qv"/><path class="hp_i4jbib"/><path class="g8vdyobvm"/><path class="wm7z6m_wg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-hash"} {...others} />);
}

export default Component;
