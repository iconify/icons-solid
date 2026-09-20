import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/f/fpqbkonzi.css';
import '../../css/d/dq-xs9irn.css';
import '../../css/v/vtypjub1f.css';
import '../../css/f/ftpsklpma.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="fpqbkonzi"/><path class="dq-xs9irn"/></g><path class="vtypjub1f"/><path class="ftpsklpma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:hash"} {...others} />);
}

export default Component;
