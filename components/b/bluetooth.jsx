import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/la7h4xhcp.css';
import '../../css/x/xrxpyx7an.css';
import '../../css/m/mypfp6xdr.css';
import '../../css/n/n7y9jdb3j.css';
import '../../css/n/ngvqgfcxk.css';
import '../../css/k/k4lipnbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="la7h4xhcp wm-shadow"/><path class="xrxpyx7an"/><path class="mypfp6xdr"/><path class="n7y9jdb3j"/><path class="ngvqgfcxk wm-shine"/><path class="k4lipnbqk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:bluetooth"} {...others} />);
}

export default Component;
