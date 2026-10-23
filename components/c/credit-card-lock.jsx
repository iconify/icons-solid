import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o2j6rdzub.css';
import '../../css/u/u_o_p2ugk.css';
import '../../css/i/ipo2-9b3w.css';
import '../../css/b/bj6rtmbox.css';
import '../../css/w/w51wt2bab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o2j6rdzub"/><rect class="u_o_p2ugk"/><path class="ipo2-9b3w"/><rect class="bj6rtmbox"/><path class="w51wt2bab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:credit-card-lock"} {...others} />);
}

export default Component;
