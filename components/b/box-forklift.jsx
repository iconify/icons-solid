import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nynsc5b2l.css';
import '../../css/n/n0k7-wbmp.css';
import '../../css/n/n0jwgvbac.css';
import '../../css/m/myeoczb3e.css';
import '../../css/r/r_metxi8c.css';
import '../../css/i/i3s6pvbpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-105 8.55 13.47)" class="nynsc5b2l"/><rect transform="rotate(-15 6.2 4.68)" class="n0k7-wbmp"/><path class="n0jwgvbac"/><path class="myeoczb3e"/><path class="r_metxi8c"/><path class="i3s6pvbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:box-forklift"} {...others} />);
}

export default Component;
