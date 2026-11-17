import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/b4r-pceao.css';
import '../../css/m/mmokhzywb.css';
import '../../css/k/kzmf-62yt.css';
import '../../css/r/r4gntoypu.css';
import '../../css/c/c76mwnbpc.css';
import '../../css/r/r8inu-bsw.css';
import '../../css/a/a1_gocb-g.css';
import '../../css/k/k8dv0wbeu.css';
import '../../css/u/ud-_m_bio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="b4r-pceao"/><path class="mmokhzywb"/><path class="kzmf-62yt"/><path class="r4gntoypu"/><path class="c76mwnbpc"/><path class="r8inu-bsw"/><path class="a1_gocb-g"/><path class="k8dv0wbeu"/><path class="ud-_m_bio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:clipboard-paste-right"} {...others} />);
}

export default Component;
