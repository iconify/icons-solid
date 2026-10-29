import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a5lu4obqm.css';
import '../../css/f/fzy7xu4pc.css';
import '../../css/m/m3y59dfla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="a5lu4obqm wm-k"/><path class="fzy7xu4pc wm-shadow"/><path class="m3y59dfla wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:triangle-engrave"} {...others} />);
}

export default Component;
