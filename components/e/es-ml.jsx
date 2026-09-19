import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/e/er099gbue.css';
import '../../css/u/uw29j-bkf.css';
import '../../css/x/xto09eavn.css';
import '../../css/r/rf27dg91x.css';
import '../../css/u/uclp6n75z.css';
import '../../css/k/kky4ftowb.css';
import '../../css/k/k1c190b-f.css';
import '../../css/c/c8nlttbwq.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="er099gbue"/><path class="uw29j-bkf"/><path class="xto09eavn"/><path class="rf27dg91x"/><path class="uclp6n75z"/><path class="kky4ftowb"/><path class="k1c190b-f"/><path class="c8nlttbwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:es-ml"} {...others} />);
}

export default Component;
