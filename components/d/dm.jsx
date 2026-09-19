import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/y/yabgk90fn.css';
import '../../css/u/u46gwbc9j.css';
import '../../css/w/wnnu-lbpz.css';
import '../../css/w/wb2nhccsk.css';
import '../../css/t/t51j3vbrv.css';
import '../../css/o/orq4y5b0o.css';
import '../../css/g/geyegv6qk.css';
import '../../css/s/s6l4ssbvk.css';
import '../../css/y/ya5ap7b4c.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="yabgk90fn"/><path class="u46gwbc9j"/><path class="wnnu-lbpz"/><path class="wb2nhccsk"/><path class="t51j3vbrv"/><path class="orq4y5b0o"/><path class="geyegv6qk"/><circle class="s6l4ssbvk"/><path class="ya5ap7b4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:dm"} {...others} />);
}

export default Component;
