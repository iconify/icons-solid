import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c0z3n2b-j.css';
import '../../css/v/v6eq_gm_q.css';
import '../../css/g/gbas-2bib.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="c0z3n2b-j"/><path class="v6eq_gm_q"/><path class="gbas-2bib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:bug-antivirus-shield"} {...others} />);
}

export default Component;
