import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jy2u6qbys.css';
import '../../css/s/smb-jnhdg.css';
import '../../css/f/fzqccolbq.css';
import '../../css/p/pz2mgtkjp.css';
import '../../css/k/k2-30wbbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jy2u6qbys"/><path class="smb-jnhdg"/><path class="fzqccolbq"/><path class="pz2mgtkjp"/><path class="k2-30wbbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:soundwave-linear"} {...others} />);
}

export default Component;
