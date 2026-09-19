import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/v9jvlqb3d.css';
import '../../css/l/la-dqtbxo.css';
import '../../css/l/lx86l0pzx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="v9jvlqb3d"/><rect class="la-dqtbxo"/><path class="lx86l0pzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:newlybuild"} {...others} />);
}

export default Component;
