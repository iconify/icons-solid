import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m18gcjbmn.css';
import '../../css/e/eet0-x7be.css';
import '../../css/i/i5jailqdw.css';
import '../../css/u/uw3_kdbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m18gcjbmn"/><path class="eet0-x7be"/><rect transform="rotate(-45 32.75 1.17)scale(1 -1)" class="i5jailqdw"/><path class="uw3_kdbsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:eraser"} {...others} />);
}

export default Component;
