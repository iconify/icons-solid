import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hv-edyz7g.css';
import '../../css/w/wjpztubau.css';
import '../../css/k/kb-c9vbzj.css';
import '../../css/n/nm92qabko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hv-edyz7g wm-k"/><path class="wjpztubau wm-a"/><path class="kb-c9vbzj wm-k"/><path class="nm92qabko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:scan-eye"} {...others} />);
}

export default Component;
