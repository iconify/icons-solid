import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cq1-lfbkw.css';
import '../../css/x/x10ij3jlt.css';
import '../../css/c/c81ephb1y.css';
import '../../css/w/w2j3olbwf.css';
import '../../css/k/kejqguncd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 1 1 0 2.58 2.94)" class="cq1-lfbkw"/><rect transform="matrix(0 1 1 0 2.58 3.3)" class="x10ij3jlt"/><path class="c81ephb1y"/><path class="w2j3olbwf"/><path class="kejqguncd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:park"} {...others} />);
}

export default Component;
