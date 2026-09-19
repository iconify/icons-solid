import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mkwo76bgt.css';
import '../../css/t/t4r4iccxi.css';
import '../../css/k/kgm_pmmhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mkwo76bgt"/><path class="t4r4iccxi"/><path class="kgm_pmmhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bug-01"} {...others} />);
}

export default Component;
