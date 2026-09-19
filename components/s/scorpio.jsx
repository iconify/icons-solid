import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/y/yh-x9fjog.css';
import '../../css/h/h3yvlcbkx.css';
import '../../css/x/xpmpyqnch.css';
import '../../css/w/wv2ddbbrw.css';
import '../../css/d/d43gff-lt.css';
import '../../css/d/dar6ezbur.css';
import '../../css/u/u8uiadbxq.css';
import '../../css/u/uc1_x3sxr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="yh-x9fjog"/><path class="h3yvlcbkx"/><path class="xpmpyqnch"/><path class="wv2ddbbrw"/><path class="d43gff-lt"/><path class="dar6ezbur"/><path class="u8uiadbxq"/><path class="uc1_x3sxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:scorpio"} {...others} />);
}

export default Component;
