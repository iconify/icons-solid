import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/duxpmhuop.css';
import '../../css/r/rxzo7bbrv.css';
import '../../css/v/vfnlx1a5v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="duxpmhuop"/><path class="rxzo7bbrv"/><path class="vfnlx1a5v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:acorn"} {...others} />);
}

export default Component;
