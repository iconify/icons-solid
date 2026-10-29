import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vgovwzbmp.css';
import '../../css/o/oycv71bfr.css';
import '../../css/r/rxp-h_bzm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="vgovwzbmp"/><path class="oycv71bfr wm-a"/><path class="rxp-h_bzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:code-xml"} {...others} />);
}

export default Component;
