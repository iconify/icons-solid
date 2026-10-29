import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rstupirhr.css';
import '../../css/m/mfuq2zbnj.css';
import '../../css/g/gle5llb7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rstupirhr"/><path class="mfuq2zbnj wm-shadow"/><path class="gle5llb7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:music-note-engrave"} {...others} />);
}

export default Component;
