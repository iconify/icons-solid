import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/c4trk6bdm.css';
import '../../css/c/ccnd5--8u.css';
import '../../css/a/auk_ovbnz.css';
import '../../css/i/ifbp50rvb.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="c4trk6bdm"/><path class="ccnd5--8u"/><path class="auk_ovbnz"/><circle class="ifbp50rvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:et-ha"} {...others} />);
}

export default Component;
