import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/g_iyx94qa.css';
import '../../css/v/viq-76nfw.css';
import '../../css/i/ilc7yzb3y.css';
import '../../css/b/bagy0obcq.css';
import '../../css/c/cwuafnbfg.css';
import '../../css/t/ta97lnblp.css';
import '../../css/c/cs2fl_bza.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="g_iyx94qa"/><circle class="viq-76nfw"/><path class="ilc7yzb3y"/><path class="bagy0obcq"/><path class="cwuafnbfg"/><path class="ta97lnblp"/><path class="cs2fl_bza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:it-78"} {...others} />);
}

export default Component;
