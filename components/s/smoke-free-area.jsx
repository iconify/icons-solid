import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zs0_f9bjo.css';
import '../../css/l/lpdptyvdz.css';
import '../../css/i/ioc2zcbxm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zs0_f9bjo"/><path class="lpdptyvdz"/><path class="ioc2zcbxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:smoke-free-area"} {...others} />);
}

export default Component;
