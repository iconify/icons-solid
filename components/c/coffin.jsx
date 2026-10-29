import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uoagbxbxi.css';
import '../../css/w/wcd-ro2in.css';
import '../../css/f/fpl3r7bpk.css';
import '../../css/j/jhbzp4gwg.css';
import '../../css/v/vbz-o904u.css';
import '../../css/k/kpapad9wf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uoagbxbxi wm-k"/><path class="wcd-ro2in wm-k"/><path class="fpl3r7bpk wm-k"/><path class="jhbzp4gwg wm-k"/><path class="vbz-o904u wm-shine"/><path class="kpapad9wf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:coffin"} {...others} />);
}

export default Component;
