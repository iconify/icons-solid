import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9w7f353f.css';
import '../../css/i/ixkm_fbmv.css';
import '../../css/h/h92zxrpdm.css';
import '../../css/m/mbsw70bxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b9w7f353f"/><path class="ixkm_fbmv"/><path class="h92zxrpdm"/><path class="mbsw70bxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:eiffel-tower"} {...others} />);
}

export default Component;
