import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/x/xyjtgccot.css';
import '../../css/o/od1sfwiym.css';
import '../../css/l/l9xb3vlof.css';
import '../../css/a/a6cozkbuc.css';
import '../../css/q/qh0k1svjh.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><g class="xyjtgccot"><path class="od1sfwiym"/><path class="l9xb3vlof"/></g><path class="a6cozkbuc"/><path class="qh0k1svjh"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:down-left-circle"} {...others} />);
}

export default Component;
