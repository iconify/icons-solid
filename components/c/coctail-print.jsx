import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zvtcr7bav.css';
import '../../css/c/c6rglys6g.css';
import '../../css/n/nyh693qis.css';
import '../../css/k/k1j-xbcdy.css';
import '../../css/q/qsjiu_bqx.css';
import '../../css/c/ck-1rvlsv.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zvtcr7bav"/><path class="c6rglys6g"/><path clip-rule="evenodd" class="nyh693qis"/><path class="k1j-xbcdy"/><path class="qsjiu_bqx"/><path class="ck-1rvlsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:coctail-print"} {...others} />);
}

export default Component;
