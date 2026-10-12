import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht2n8rylu.css';
import '../../css/e/ex-drp13w.css';
import '../../css/l/lls_syh2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 20.9 21.46)" class="ht2n8rylu"/><rect transform="matrix(0 -1 -1 0 20.9 21.46)" class="ex-drp13w"/><path class="lls_syh2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:notes-minus"} {...others} />);
}

export default Component;
