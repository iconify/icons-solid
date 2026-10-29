import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s4v3t5b9z.css';
import '../../css/s/swk89qbix.css';
import '../../css/i/i1l2chbjc.css';
import '../../css/c/casbilbvn.css';
import '../../css/g/gsf-f8bom.css';
import '../../css/c/cubcsm-se.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s4v3t5b9z wm-k"/><path class="swk89qbix wm-k"/><path class="i1l2chbjc wm-k"/><path class="casbilbvn wm-shine"/><path class="gsf-f8bom wm-a"/><path class="cubcsm-se wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:move"} {...others} />);
}

export default Component;
