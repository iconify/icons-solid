import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/c/cai_u9bxk.css';
import '../../css/n/nmdca2b9w.css';
import '../../css/l/ltbe27b-r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path class="cai_u9bxk"/><path clip-rule="evenodd" class="nmdca2b9w"/><path class="ltbe27b-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:medicine-pop"} {...others} />);
}

export default Component;
