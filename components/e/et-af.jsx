import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/l/lb-lfcbse.css';
import '../../css/h/hzvbg3bbn.css';
import '../../css/u/ul3ge0b9c.css';
import '../../css/a/a0a4fku7h.css';
import '../../css/c/cywyir7_w.css';
import '../../css/x/xc48zglrv.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="lb-lfcbse"/><path class="hzvbg3bbn"/><path class="ul3ge0b9c"/><path class="a0a4fku7h"/><path class="cywyir7_w"/><path class="xc48zglrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:et-af"} {...others} />);
}

export default Component;
