import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-l5gq24p.css';
import '../../css/n/n6wtlaclb.css';
import '../../css/u/uyjidpbdl.css';
import '../../css/w/wpjxko2-y.css';
import '../../css/f/frvpykb4a.css';
import '../../css/z/z3ynfub1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g-l5gq24p"/><path class="n6wtlaclb"/><circle class="uyjidpbdl"/><path class="wpjxko2-y"/><circle class="frvpykb4a"/><path class="z3ynfub1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:baseball"} {...others} />);
}

export default Component;
