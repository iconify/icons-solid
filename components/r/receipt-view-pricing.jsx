import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h54bihbck.css';
import '../../css/m/m6zayjb6x.css';
import '../../css/b/b7_bq8bcw.css';
import '../../css/o/ot9ynr9qn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h54bihbck"/><path class="m6zayjb6x"/><path class="b7_bq8bcw"/><path class="ot9ynr9qn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:receipt-view-pricing"} {...others} />);
}

export default Component;
