import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mrmciybze.css';
import '../../css/g/git96pb1s.css';
import '../../css/f/fkavkab1f.css';
import '../../css/p/pob86kbbl.css';
import '../../css/u/uhaaxhb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mrmciybze"/><path class="git96pb1s"/><path class="fkavkab1f"/><path class="pob86kbbl"/><path class="uhaaxhb8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:face-scan-circle-bold"} {...others} />);
}

export default Component;
