import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvilx1q3c.css';
import '../../css/n/nx51ps2-o.css';
import '../../css/w/wsdxj29jq.css';
import '../../css/g/gvcplo0fy.css';
import '../../css/a/a1qr59bcn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="kvilx1q3c"><path class="nx51ps2-o"/><path class="wsdxj29jq"/><path class="gvcplo0fy"/><path class="a1qr59bcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:page-template"} {...others} />);
}

export default Component;
