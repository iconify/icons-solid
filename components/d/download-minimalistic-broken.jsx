import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iah3itbam.css';
import '../../css/k/kbcdf4iop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iah3itbam"/><path class="kbcdf4iop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:download-minimalistic-broken"} {...others} />);
}

export default Component;
