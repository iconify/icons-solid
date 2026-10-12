import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lw2t91b3o.css';
import '../../css/p/pqorn4b5k.css';
import '../../css/w/wx8o9908t.css';
import '../../css/y/yz2f90bfa.css';
import '../../css/s/s6xa55bki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lw2t91b3o"/><path class="pqorn4b5k"/><path class="wx8o9908t"/><path class="yz2f90bfa"/><path class="s6xa55bki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:team"} {...others} />);
}

export default Component;
