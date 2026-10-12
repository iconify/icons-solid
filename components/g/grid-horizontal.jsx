import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1jb44d2h.css';
import '../../css/j/j4n158kgw.css';
import '../../css/i/i1y98nbbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m1jb44d2h"/><rect transform="matrix(0 -1 -1 0 21.24 12)" class="j4n158kgw"/><path class="i1y98nbbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:grid-horizontal"} {...others} />);
}

export default Component;
