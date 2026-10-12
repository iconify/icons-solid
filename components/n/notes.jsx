import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht2n8rylu.css';
import '../../css/e/ex-drp13w.css';
import '../../css/n/n1jl5k9bw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 20.9 21.46)" class="ht2n8rylu"/><rect transform="matrix(0 -1 -1 0 20.9 21.46)" class="ex-drp13w"/><path class="n1jl5k9bw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:notes"} {...others} />);
}

export default Component;
