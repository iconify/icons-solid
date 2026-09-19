import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/a5w4v1b-w.css';
import '../../css/c/cc1c_acsj.css';
import '../../css/i/il3wg5byx.css';
import '../../css/n/nw26jcbsv.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="a5w4v1b-w"/><path class="cc1c_acsj"/><path class="il3wg5byx"/><path class="nw26jcbsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:af"} {...others} />);
}

export default Component;
