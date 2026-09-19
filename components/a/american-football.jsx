import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n93lndbqr.css';
import '../../css/u/u6gd8cg2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="n93lndbqr"/><path class="u6gd8cg2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:american-football"} {...others} />);
}

export default Component;
