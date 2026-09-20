import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hsin36bfa.css';
import '../../css/s/s70npyb2y.css';
import '../../css/f/flvpi11cb.css';
import '../../css/v/v-j6y-zzv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hsin36bfa"/><path class="s70npyb2y"/><path class="flvpi11cb"/><path class="v-j6y-zzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-broken-minimalistic-outline"} {...others} />);
}

export default Component;
