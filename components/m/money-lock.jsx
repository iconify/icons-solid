import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kk51r8bsr.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/z/zaj4axb5y.css';
import '../../css/a/a-5kiefaq.css';
import '../../css/m/mlczmkbpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kk51r8bsr"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="zaj4axb5y"/><rect class="a-5kiefaq"/><path class="mlczmkbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:money-lock"} {...others} />);
}

export default Component;
