import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ckdk7bcxp.css';
import '../../css/b/bhh9xsbsl.css';
import '../../css/u/u_g5_qb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ckdk7bcxp"/><path class="bhh9xsbsl"/><path class="u_g5_qb-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:airplay"} {...others} />);
}

export default Component;
