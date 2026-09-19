import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lt5wty21e.css';
import '../../css/m/mh40agbik.css';
import '../../css/v/vjoic9nzj.css';
import '../../css/e/eme0i_mbi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="lt5wty21e"/><path clip-rule="evenodd" class="mh40agbik"/><path class="vjoic9nzj"/><path clip-rule="evenodd" class="eme0i_mbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:female-reproductive-system"} {...others} />);
}

export default Component;
