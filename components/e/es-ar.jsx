import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/r-pay6vgx.css';
import '../../css/j/j38d7fbeq.css';
import '../../css/u/unovgacgk.css';
import '../../css/d/dhbf_756u.css';
import '../../css/i/iel24fwdu.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="r-pay6vgx"/><path class="j38d7fbeq"/><path class="unovgacgk"/><path class="dhbf_756u"/><path class="iel24fwdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:es-ar"} {...others} />);
}

export default Component;
