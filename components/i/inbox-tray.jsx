import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh94hzf6s.css';
import '../../css/z/zjiu-obdp.css';
import '../../css/m/m95htdxmw.css';
import '../../css/d/dcqdxh5zc.css';
import '../../css/g/gv6we62_u.css';
import '../../css/c/cau_5iksw.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="rh94hzf6s"><path class="zjiu-obdp"/><path class="m95htdxmw"/></g><g class="dcqdxh5zc"><path class="gv6we62_u"/><path class="cau_5iksw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:inbox-tray"} {...others} />);
}

export default Component;
