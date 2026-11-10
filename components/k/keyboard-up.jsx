import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8j_g755s.css';
import '../../css/u/uy51prbbu.css';
import '../../css/x/x5gyftlbq.css';
import '../../css/t/ttc_v_kjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d8j_g755s"/><path class="uy51prbbu"/><path class="x5gyftlbq"/><path class="ttc_v_kjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:keyboard-up"} {...others} />);
}

export default Component;
