import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/toxhfac1p.css';
import '../../css/w/wwf59ulvl.css';
import '../../css/n/nxh4k1a_x.css';
import '../../css/c/cw_0nw0sg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="toxhfac1p"/><path class="wwf59ulvl"/><path class="nxh4k1a_x"/><path class="cw_0nw0sg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:car-taxi-1"} {...others} />);
}

export default Component;
