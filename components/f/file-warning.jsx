import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j47t9ib-f.css';
import '../../css/b/bh6h8pb8d.css';
import '../../css/l/l6a2_fa0a.css';
import '../../css/r/r0ya8xbdf.css';
import '../../css/g/gg3bycosf.css';
import '../../css/f/fdghbcewh.css';
import '../../css/g/gwj64bl5p.css';
import '../../css/j/j-_qykb7v.css';
import '../../css/x/xenurj_7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j47t9ib-f wm-shadow"/><path class="bh6h8pb8d wm-k"/><path class="l6a2_fa0a wm-k"/><path class="r0ya8xbdf wm-k"/><path class="gg3bycosf wm-k"/><path class="fdghbcewh wm-k"/><path class="gwj64bl5p wm-shine"/><path class="j-_qykb7v wm-k"/><path class="wm-a xenurj_7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:file-warning"} {...others} />);
}

export default Component;
