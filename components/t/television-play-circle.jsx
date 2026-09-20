import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/x/xyjtgccot.css';
import '../../css/y/ybi4yac6l.css';
import '../../css/w/wl-51tbhf.css';
import '../../css/x/xucq0fe9z.css';
import '../../css/d/dxol4ab2x.css';
import '../../css/w/wiwz2_ber.css';
import '../../css/j/jcid24tzb.css';
import '../../css/z/zsoy0wsts.css';
import '../../css/k/kg9oxl0kw.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><g class="xyjtgccot"><path class="ybi4yac6l"/><path class="wl-51tbhf"/><path class="xucq0fe9z"/><path class="dxol4ab2x"/></g><path class="wiwz2_ber"/><path class="jcid24tzb"/><path class="zsoy0wsts"/><path class="kg9oxl0kw"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:television-play-circle"} {...others} />);
}

export default Component;
