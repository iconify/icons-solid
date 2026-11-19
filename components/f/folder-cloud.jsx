import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tyaakabnv.css';
import '../../css/u/uzi22yddn.css';
import '../../css/y/y0f6-98sn.css';
import '../../css/s/skkwrmbax.css';
import '../../css/o/ox3qj5bqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tyaakabnv"/><path class="uzi22yddn"/><path class="y0f6-98sn"/><path class="skkwrmbax"/><path class="ox3qj5bqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-cloud"} {...others} />);
}

export default Component;
