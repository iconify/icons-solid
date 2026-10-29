import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tuvtkxb2r.css';
import '../../css/u/uwys18qoa.css';
import '../../css/h/htewx6b8y.css';
import '../../css/l/lpllirfkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="tuvtkxb2r wm-k"/><path class="uwys18qoa wm-a"/><path class="htewx6b8y"/><path class="lpllirfkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:spy"} {...others} />);
}

export default Component;
