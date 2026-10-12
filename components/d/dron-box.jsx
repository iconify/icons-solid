import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ew_yt3bcc.css';
import '../../css/c/c5pgfqa-t.css';
import '../../css/k/keno9nfza.css';
import '../../css/i/iw3ct2u3u.css';
import '../../css/m/m6s491-vw.css';
import '../../css/j/jaye28bcy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 15.48 10.43)" class="ew_yt3bcc"/><rect transform="matrix(0 -1 -1 0 15.48 21.79)" class="c5pgfqa-t"/><rect transform="matrix(0 -1 -1 0 15.48 10.43)" class="keno9nfza"/><path class="iw3ct2u3u"/><rect class="m6s491-vw"/><path class="jaye28bcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dron-box"} {...others} />);
}

export default Component;
