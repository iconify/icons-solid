import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hv-edyz7g.css';
import '../../css/i/i77gb-bmq.css';
import '../../css/w/wzoywxz7p.css';
import '../../css/h/hgmtejbzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hv-edyz7g wm-k"/><path class="i77gb-bmq wm-a"/><path class="wzoywxz7p"/><path class="hgmtejbzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:scan-search"} {...others} />);
}

export default Component;
