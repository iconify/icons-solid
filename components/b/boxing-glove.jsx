import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pg18qdb_c.css';
import '../../css/k/k817dryvv.css';
import '../../css/r/rfidhbbql.css';
import '../../css/q/q5hz12wnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(-.7863 -.61785 .59169 -.80617 10.17 23)" class="pg18qdb_c"/><path class="k817dryvv"/><rect transform="matrix(-.7863 -.61785 .59169 -.80617 10.17 23)" class="rfidhbbql"/><path class="q5hz12wnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:boxing-glove"} {...others} />);
}

export default Component;
