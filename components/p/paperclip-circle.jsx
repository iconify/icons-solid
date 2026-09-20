import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/x/xyjtgccot.css';
import '../../css/g/gqfd6cxxb.css';
import '../../css/s/s4g2rebse.css';
import '../../css/h/hxpqc3b-g.css';
import '../../css/l/l911jxl-r.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><g class="xyjtgccot"><path class="gqfd6cxxb"/><path class="s4g2rebse"/></g><path class="hxpqc3b-g"/><path class="l911jxl-r"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:paperclip-circle"} {...others} />);
}

export default Component;
