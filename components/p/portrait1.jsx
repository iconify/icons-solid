import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/m/m2uedgb0a.css';
import '../../css/q/qotbgr4jf.css';
import '../../css/g/gmfq3tbis.css';
import '../../css/m/myrtt47dy.css';
import '../../css/t/tpyehr2_f.css';
import '../../css/k/kzyhgrb1w.css';
import '../../css/m/mq1ukwjen.css';
import '../../css/l/l3wqg7b7n.css';
import '../../css/i/iy02jdb0q.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><path class="m2uedgb0a"/><path class="qotbgr4jf"/><path class="gmfq3tbis"/><path class="myrtt47dy"/><path class="tpyehr2_f"/><path class="kzyhgrb1w"/><path class="mq1ukwjen"/><path class="l3wqg7b7n"/><path class="iy02jdb0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:portrait1"} {...others} />);
}

export default Component;
