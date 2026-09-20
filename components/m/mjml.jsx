import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bipk47jpq.css';
import '../../css/n/nw-_opefk.css';
import '../../css/r/rqml24bnx.css';
import '../../css/k/kslvnrg1u.css';
import '../../css/r/ron-s3gww.css';
import '../../css/o/oeo74dn0y.css';

const viewBox = {"width":120,"height":120};
const content = `<g transform="translate(9.943 14.253)scale(.8026)"><path class="bipk47jpq"/><ellipse class="nw-_opefk"/><path class="rqml24bnx"/><path class="kslvnrg1u"/><path class="ron-s3gww"/><ellipse class="oeo74dn0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:mjml"} {...others} />);
}

export default Component;
