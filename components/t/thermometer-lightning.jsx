import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g152-dbzo.css';
import '../../css/a/amu7dtb3y.css';
import '../../css/q/q2xl-p4xm.css';
import '../../css/s/smpvd6bpa.css';
import '../../css/y/ya-pqcc8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g152-dbzo"/><path class="amu7dtb3y"/><path class="q2xl-p4xm"/><path class="smpvd6bpa"/><path class="ya-pqcc8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:thermometer-lightning"} {...others} />);
}

export default Component;
