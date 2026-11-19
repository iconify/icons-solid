import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eqg6d3e-k.css';
import '../../css/p/pzgvfgrdo.css';
import '../../css/r/rofqitvet.css';
import '../../css/i/ifofgdl4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eqg6d3e-k"/><path class="pzgvfgrdo"/><path class="rofqitvet"/><path class="ifofgdl4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:slot-machine"} {...others} />);
}

export default Component;
