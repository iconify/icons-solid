import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bpniqnprj.css';
import '../../css/x/xj21phzxc.css';
import '../../css/s/s6-3i5dyx.css';
import '../../css/w/w4jh7bb-j.css';
import '../../css/y/yzf-p7c7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bpniqnprj"/><path class="xj21phzxc"/><rect class="s6-3i5dyx"/><circle class="w4jh7bb-j"/><circle class="yzf-p7c7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:plug-ccs2"} {...others} />);
}

export default Component;
