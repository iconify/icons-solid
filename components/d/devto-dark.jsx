import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/e/e-2ge42fi.css';
import '../../css/l/llfj4f_hk.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1mjunbsu"><path clip-rule="evenodd" class="e-2ge42fi"/><path class="llfj4f_hk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:devto-dark"} {...others} />);
}

export default Component;
