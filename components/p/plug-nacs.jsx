import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yjyssp3-y.css';
import '../../css/v/vq15xlb0p.css';
import '../../css/u/urk6-bcpf.css';
import '../../css/a/at07ckjrt.css';
import '../../css/s/svcfaibbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yjyssp3-y"/><circle class="vq15xlb0p"/><circle class="urk6-bcpf"/><circle class="at07ckjrt"/><path class="svcfaibbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:plug-nacs"} {...others} />);
}

export default Component;
