import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zl8xpjbei.css';
import '../../css/x/x4_93tbra.css';
import '../../css/i/iku4u29ow.css';
import '../../css/g/gqdufsjnn.css';
import '../../css/e/e9z611ogb.css';
import '../../css/v/v3tks758k.css';
import '../../css/o/ozh3t9bqs.css';
import '../../css/y/y48fzcboq.css';
import '../../css/d/d5xjs_r8r.css';
import '../../css/y/yexab8bnv.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="zl8xpjbei"/><path class="x4_93tbra"/><path class="iku4u29ow"/><path class="gqdufsjnn"/><path class="e9z611ogb"/><path class="v3tks758k"/><path class="ozh3t9bqs"/><path class="y48fzcboq"/><path class="d5xjs_r8r"/><path class="yexab8bnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-pt-br"} {...others} />);
}

export default Component;
