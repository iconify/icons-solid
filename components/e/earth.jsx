import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/g_iyx94qa.css';
import '../../css/p/ptysaqzrb.css';
import '../../css/b/bx5a6eboz.css';
import '../../css/w/wc6fly8wj.css';
import '../../css/k/k4iej-bbu.css';
import '../../css/t/tavwsjbov.css';
import '../../css/i/ip5f30bce.css';
import '../../css/q/q-zyhzjlg.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="g_iyx94qa"/><path class="ptysaqzrb"/><path class="bx5a6eboz"/><path class="wc6fly8wj"/><path class="k4iej-bbu"/><path class="tavwsjbov"/><path class="ip5f30bce"/><path class="q-zyhzjlg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:earth"} {...others} />);
}

export default Component;
