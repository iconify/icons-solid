import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_vxd5bvs.css';
import '../../css/p/p0dd6dbol.css';
import '../../css/y/y__cacvha.css';
import '../../css/q/q4fxlaccz.css';
import '../../css/k/k0lwqxbvz.css';
import '../../css/z/zozkijhek.css';
import '../../css/s/s48_u__dx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_vxd5bvs"/><path class="p0dd6dbol"/><path class="y__cacvha"/><path class="q4fxlaccz"/><path class="k0lwqxbvz"/><path class="zozkijhek"/><path class="s48_u__dx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sheet-bold"} {...others} />);
}

export default Component;
