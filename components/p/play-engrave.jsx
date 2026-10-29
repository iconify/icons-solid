import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ij_oxib5j.css';
import '../../css/r/r0r9_sije.css';
import '../../css/l/l6swvrbfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ij_oxib5j"/><path class="r0r9_sije wm-shadow"/><path class="l6swvrbfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:play-engrave"} {...others} />);
}

export default Component;
