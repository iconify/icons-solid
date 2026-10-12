import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g47o54kzt.css';
import '../../css/q/q5hoiboxc.css';
import '../../css/m/m2n_gm4_v.css';
import '../../css/s/shwczoibt.css';
import '../../css/y/yff4kwmaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g47o54kzt"/><path class="q5hoiboxc"/><path class="m2n_gm4_v"/><rect transform="rotate(135 6.603 13.18)scale(-1 1)" class="shwczoibt"/><path class="yff4kwmaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-edit"} {...others} />);
}

export default Component;
