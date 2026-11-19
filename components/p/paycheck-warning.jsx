import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0bk-h96g.css';
import '../../css/y/yw-jeequa.css';
import '../../css/o/ohcj6h0gi.css';
import '../../css/y/y3fr6fb-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o0bk-h96g"/><path class="yw-jeequa"/><path class="ohcj6h0gi"/><path class="y3fr6fb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:paycheck-warning"} {...others} />);
}

export default Component;
