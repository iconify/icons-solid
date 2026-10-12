import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f69032b0y.css';
import '../../css/c/cvjvrzlib.css';
import '../../css/h/hafas-bxx.css';
import '../../css/i/iq8fttbma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f69032b0y"/><rect transform="rotate(15 3.47 2.77)" class="cvjvrzlib"/><path class="hafas-bxx"/><path class="iq8fttbma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cctv-filled"} {...others} />);
}

export default Component;
