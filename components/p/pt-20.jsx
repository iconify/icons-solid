import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/cs-7pkbny.css';
import '../../css/q/qu47k8blr.css';
import '../../css/g/g48e13jxo.css';
import '../../css/f/f-grrttlb.css';
import '../../css/e/edfxeussi.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="cs-7pkbny"/><path class="qu47k8blr"/><path class="g48e13jxo"/><path class="f-grrttlb"/><path class="edfxeussi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:pt-20"} {...others} />);
}

export default Component;
