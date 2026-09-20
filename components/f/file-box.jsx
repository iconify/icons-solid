import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/boz1ay-3b.css';
import '../../css/a/auf_922au.css';
import '../../css/m/mjrylvbbp.css';
import '../../css/w/wewi41bsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="boz1ay-3b"/><path class="auf_922au"/><path class="mjrylvbbp"/><path class="wewi41bsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-box"} {...others} />);
}

export default Component;
