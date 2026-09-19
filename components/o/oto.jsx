import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/v/vvy945b3u.css';
import '../../css/s/slr06hbic.css';
import '../../css/l/l0js99f3p.css';
import '../../css/n/nxnu6c0hl.css';
import '../../css/b/bju6vld9y.css';
import '../../css/v/viq-76nfw.css';
import '../../css/v/vill0fb1n.css';
import '../../css/m/me_nbwbdo.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsOto0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsOto0)"><path class="vvy945b3u"/><path class="slr06hbic"/><path class="l0js99f3p"/><path class="nxnu6c0hl"/><path class="bju6vld9y"/><circle class="viq-76nfw"/><circle class="vill0fb1n"/><path class="me_nbwbdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:oto"} {...others} />);
}

export default Component;
