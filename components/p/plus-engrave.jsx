import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n0c1-_gug.css';
import '../../css/e/e8cb6cwzn.css';
import '../../css/a/ani_o8bam.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n0c1-_gug"/><path class="e8cb6cwzn wm-shadow"/><path class="ani_o8bam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plus-engrave"} {...others} />);
}

export default Component;
