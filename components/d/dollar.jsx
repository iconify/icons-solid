import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/q/qdk9bsj1m.css';
import '../../css/t/tjzrtobbx.css';
import '../../css/g/gz12--zax.css';
import '../../css/q/qloewrbaq.css';
import '../../css/l/lrepm4sfl.css';
import '../../css/m/maejv3bjx.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="qdk9bsj1m"/><path class="tjzrtobbx"/><path class="gz12--zax"/></g><path class="qloewrbaq"/><path class="lrepm4sfl"/><path class="maejv3bjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:dollar"} {...others} />);
}

export default Component;
