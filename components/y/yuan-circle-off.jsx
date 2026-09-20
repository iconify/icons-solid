import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dytyt2ibl.css';
import '../../css/t/tuthbmb5a.css';
import '../../css/c/chnk-g9lg.css';
import '../../css/y/youv8-beu.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dytyt2ibl"/><path clip-rule="evenodd" class="tuthbmb5a"/><path clip-rule="evenodd" class="chnk-g9lg"/><path clip-rule="evenodd" class="youv8-beu"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:yuan-circle-off"} {...others} />);
}

export default Component;
