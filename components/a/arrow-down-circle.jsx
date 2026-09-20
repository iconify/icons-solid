import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/x/xyjtgccot.css';
import '../../css/e/e0h4krbfq.css';
import '../../css/c/c_o3v3bmz.css';
import '../../css/h/hfzw5-qzl.css';
import '../../css/l/lbgjelwtv.css';
import '../../css/w/wnddzdb0b.css';
import '../../css/a/arnnz_b1g.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><g class="xyjtgccot"><path class="e0h4krbfq"/><path class="c_o3v3bmz"/><path class="hfzw5-qzl"/></g><path class="lbgjelwtv"/><path class="wnddzdb0b"/><path class="arnnz_b1g"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-down-circle"} {...others} />);
}

export default Component;
