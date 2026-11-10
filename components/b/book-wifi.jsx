import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmwqoie5k.css';
import '../../css/l/ls62l0b2z.css';
import '../../css/q/qo2yf7i4i.css';
import '../../css/f/f3_r5nbvw.css';
import '../../css/o/o_pj0k92n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cmwqoie5k"/><path class="ls62l0b2z"/><path class="qo2yf7i4i"/><path class="f3_r5nbvw"/><path class="o_pj0k92n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-wifi"} {...others} />);
}

export default Component;
