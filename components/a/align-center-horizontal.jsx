import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/otiayh33r.css';
import '../../css/w/wt_5s3s9y.css';
import '../../css/m/mkw3e3bgk.css';
import '../../css/y/y1a63-bcp.css';
import '../../css/z/z1_i52sma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="otiayh33r"/><rect class="wt_5s3s9y"/><rect class="mkw3e3bgk"/><rect class="y1a63-bcp"/><path class="z1_i52sma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:align-center-horizontal"} {...others} />);
}

export default Component;
