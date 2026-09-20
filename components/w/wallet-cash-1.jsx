import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/zeus6cf2k.css';
import '../../css/h/hj_3dtbcr.css';
import '../../css/l/lpflbekmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="zeus6cf2k"/><path class="hj_3dtbcr"/><path class="lpflbekmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:wallet-cash-1"} {...others} />);
}

export default Component;
