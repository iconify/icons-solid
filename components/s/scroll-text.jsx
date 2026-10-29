import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b7kxx3buj.css';
import '../../css/v/vj72ynblm.css';
import '../../css/g/gsa1bxb_c.css';
import '../../css/i/iqdjlogrt.css';
import '../../css/i/irwordafc.css';
import '../../css/p/pts3sb-ji.css';
import '../../css/x/xuakozbno.css';
import '../../css/i/ihnk1ub3c.css';
import '../../css/p/pa41jqbse.css';
import '../../css/f/f1m-6fgch.css';
import '../../css/g/gp1aqybby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b7kxx3buj wm-shadow"/><path class="vj72ynblm wm-shadow"/><path class="gsa1bxb_c"/><path class="iqdjlogrt"/><path class="irwordafc"/><path class="pts3sb-ji"/><path class="xuakozbno"/><path class="ihnk1ub3c"/><path class="pa41jqbse"/><path class="f1m-6fgch"/><path class="gp1aqybby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:scroll-text"} {...others} />);
}

export default Component;
