import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9w_4sb1k.css';
import '../../css/t/t-3v1hi-d.css';
import '../../css/i/i1tsml_2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e9w_4sb1k"/><path class="t-3v1hi-d"/><path class="i1tsml_2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:earbuds-right"} {...others} />);
}

export default Component;
