import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/o/o0pgzsbpd.css';
import '../../css/n/nag_kzbmf.css';
import '../../css/r/r6t0v6bxy.css';
import '../../css/a/axeq_dblc.css';
import '../../css/a/a_wk_ubyk.css';
import '../../css/e/eylw51bto.css';
import '../../css/y/y8-skynlu.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="o0pgzsbpd"/><path class="nag_kzbmf"/><path class="r6t0v6bxy"/><path class="axeq_dblc"/><path class="a_wk_ubyk"/><path class="eylw51bto"/><path class="y8-skynlu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:sm"} {...others} />);
}

export default Component;
