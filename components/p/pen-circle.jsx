import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vm_5cbc4v.css';
import '../../css/y/ymtmr1bse.css';
import '../../css/l/l1m-b-1te.css';
import '../../css/j/jj2_p5jbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vm_5cbc4v"/><path class="ymtmr1bse"/><path class="l1m-b-1te"/><path class="jj2_p5jbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pen-circle"} {...others} />);
}

export default Component;
