import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/de5w7-mpz.css';
import '../../css/l/l_sndccgx.css';
import '../../css/o/oho3g31vo.css';
import '../../css/j/jpx_l1bvm.css';
import '../../css/f/fr3o6abaq.css';
import '../../css/v/vtxb6tbek.css';
import '../../css/n/nf8ou1q-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="de5w7-mpz wm-k"/><path class="l_sndccgx wm-k"/><path class="oho3g31vo wm-k"/><path class="jpx_l1bvm wm-shine"/><path class="fr3o6abaq wm-s"/><path class="vtxb6tbek wm-s"/><path class="nf8ou1q-e wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:phone-forwarded"} {...others} />);
}

export default Component;
