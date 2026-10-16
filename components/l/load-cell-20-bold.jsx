import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4p14_bkx.css';
import '../../css/p/pacy82nug.css';
import '../../css/x/xftc_vblp.css';
import '../../css/k/kpc_4jb4q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m4p14_bkx"/><path class="pacy82nug"/><path class="xftc_vblp"/><path class="kpc_4jb4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:load-cell-20-bold"} {...others} />);
}

export default Component;
