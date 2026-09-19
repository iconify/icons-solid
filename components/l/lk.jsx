import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/f8gr8zbkt.css';
import '../../css/u/ub5vbibdc.css';
import '../../css/t/tac_ulo3k.css';
import '../../css/y/ycdtgb15n.css';
import '../../css/z/zyc_r8bkn.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="f8gr8zbkt"/><path class="ub5vbibdc"/><path class="tac_ulo3k"/><path class="ycdtgb15n"/><path class="zyc_r8bkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lk"} {...others} />);
}

export default Component;
