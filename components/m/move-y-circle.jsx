import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvp9oibxa.css';
import '../../css/x/xyjtgccot.css';
import '../../css/s/sadsggbrj.css';
import '../../css/b/bt8qat4rn.css';
import '../../css/e/eirlrf0ds.css';
import '../../css/o/oqp4pe41z.css';
import '../../css/g/gexzk5acr.css';
import '../../css/j/j8mhn0b-j.css';
import '../../css/m/mn4bp7bsf.css';
import '../../css/z/zhk99f-bo.css';
import '../../css/y/ya22fsvpd.css';
import '../../css/c/c1xb2abra.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvp9oibxa"/><g class="xyjtgccot"><path class="sadsggbrj"/><path class="bt8qat4rn"/><path class="eirlrf0ds"/><path class="oqp4pe41z"/><path class="gexzk5acr"/><path class="j8mhn0b-j"/></g><path class="mn4bp7bsf"/><path class="zhk99f-bo"/><path class="ya22fsvpd"/><path class="c1xb2abra"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:move-y-circle"} {...others} />);
}

export default Component;
