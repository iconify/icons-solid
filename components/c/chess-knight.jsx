import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nk0-lpbke.css';
import '../../css/i/i9kvzwdpj.css';
import '../../css/g/g-iagdc0l.css';
import '../../css/h/h72w-w67u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 1 1 0 4.55 18.97)" class="nk0-lpbke"/><path class="i9kvzwdpj"/><path class="g-iagdc0l"/><path class="h72w-w67u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chess-knight"} {...others} />);
}

export default Component;
