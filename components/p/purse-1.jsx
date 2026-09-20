import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imqrq0bre.css';
import '../../css/v/vdlp-abyu.css';
import '../../css/u/u1bhpm2uu.css';
import '../../css/v/vxiaubcry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="imqrq0bre"/><path class="vdlp-abyu"/><path class="u1bhpm2uu"/><path class="vxiaubcry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:purse-1"} {...others} />);
}

export default Component;
