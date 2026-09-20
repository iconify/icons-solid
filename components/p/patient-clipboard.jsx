import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yitlz_ket.css';
import '../../css/r/rtf6gcbjd.css';
import '../../css/o/om8v3_2fw.css';
import '../../css/f/fuq04fb8o.css';
import '../../css/f/f5r7sq7wr.css';
import '../../css/y/y5j-d1kiw.css';
import '../../css/f/fe5dzcbbr.css';
import '../../css/b/b97_h3bkp.css';
import '../../css/d/d94ydxbid.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yitlz_ket"/><path class="rtf6gcbjd"/><path class="om8v3_2fw"/><path class="fuq04fb8o"/><path class="f5r7sq7wr"/><path class="y5j-d1kiw"/><path class="fe5dzcbbr"/><path class="b97_h3bkp"/><path class="d94ydxbid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:patient-clipboard"} {...others} />);
}

export default Component;
