import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/c/csrkrnb5y.css';
import '../../css/l/lsxguc_1v.css';
import '../../css/d/di80acbxg.css';
import '../../css/x/x__-1cckh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="csrkrnb5y"/><path class="lsxguc_1v"/></g><path class="di80acbxg"/><path class="x__-1cckh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-bold-duotone"} {...others} />);
}

export default Component;
