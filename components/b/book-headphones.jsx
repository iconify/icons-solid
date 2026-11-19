import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lzm7bcc6g.css';
import '../../css/z/zayp6_xeg.css';
import '../../css/a/auq-e_b7y.css';
import '../../css/m/mg05szbmz.css';
import '../../css/s/smbqxce9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lzm7bcc6g"/><path class="zayp6_xeg"/><path class="auq-e_b7y"/><path class="mg05szbmz"/><path class="smbqxce9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-headphones"} {...others} />);
}

export default Component;
