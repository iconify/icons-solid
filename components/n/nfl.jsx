import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s24icml3p.css';
import '../../css/s/s0dfkw_qf.css';
import '../../css/c/cz59-obpv.css';
import '../../css/w/w9z7hqbwq.css';
import '../../css/p/p8f_tn80w.css';

const viewBox = {"width":500,"height":500};
const content = `<g class="ft5dv1b6b"><path class="s24icml3p"/><path class="s0dfkw_qf"/><path class="cz59-obpv"/><path class="w9z7hqbwq"/><path class="p8f_tn80w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nfl"} {...others} />);
}

export default Component;
