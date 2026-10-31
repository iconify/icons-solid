import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fdxuutbbt.css';
import '../../css/h/hl8zpwdjy.css';
import '../../css/i/inajs0nql.css';
import '../../css/f/fzlatcc_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="fdxuutbbt"/><path class="hl8zpwdjy wm-shine"/><path class="inajs0nql wm-k"/><path class="fzlatcc_e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:door-open"} {...others} />);
}

export default Component;
