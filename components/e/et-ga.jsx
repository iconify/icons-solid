import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/p/pv_50rbzi.css';
import '../../css/k/kvl8sy3or.css';
import '../../css/o/ocf9p4ban.css';
import '../../css/g/gds--obwq.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="pv_50rbzi"/><path class="kvl8sy3or"/><path class="ocf9p4ban"/><path class="gds--obwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:et-ga"} {...others} />);
}

export default Component;
