import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bxlizccri.css';
import '../../css/d/dvt0gg15f.css';
import '../../css/p/pay_c_brr.css';
import '../../css/u/uq9m_eh_g.css';
import '../../css/c/csm45sbln.css';
import '../../css/f/fr8_t4_lj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bxlizccri"/><path clip-rule="evenodd" class="dvt0gg15f"/><path class="pay_c_brr"/><path class="uq9m_eh_g"/><path class="csm45sbln"/><path class="fr8_t4_lj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:washing-machine-bold-duotone"} {...others} />);
}

export default Component;
