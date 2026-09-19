import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/o/oiex3vjkl.css';
import '../../css/e/ef81p3bvz.css';
import '../../css/o/ok6dmvbac.css';
import '../../css/k/kcmh-xb-q.css';
import '../../css/v/vbovormrh.css';
import '../../css/p/p4ojp8v2l.css';
import '../../css/x/xdpixo8nt.css';
import '../../css/y/y3z2e7bkz.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="oiex3vjkl"/><path class="ef81p3bvz"/><path class="ok6dmvbac"/><path class="kcmh-xb-q"/><path class="vbovormrh"/><path class="p4ojp8v2l"/><path class="xdpixo8nt"/><path class="y3z2e7bkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:au-nt"} {...others} />);
}

export default Component;
