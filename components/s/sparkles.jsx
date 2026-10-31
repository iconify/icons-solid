import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/f3q1swbhi.css';
import '../../css/n/nlnvm0s8t.css';
import '../../css/g/gapblccgm.css';
import '../../css/d/d-i86qbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="f3q1swbhi"/><path class="nlnvm0s8t wm-shine"/><path class="gapblccgm wm-k"/><path class="d-i86qbmd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:sparkles"} {...others} />);
}

export default Component;
