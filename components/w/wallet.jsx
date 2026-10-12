import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/luv3m6b_d.css';
import '../../css/p/p7mev8a0r.css';
import '../../css/w/wxfi02bkr.css';
import '../../css/v/v6-odob5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="luv3m6b_d"/><rect transform="matrix(0 -1 -1 0 22.29 20.21)" class="p7mev8a0r"/><path class="wxfi02bkr"/><path class="v6-odob5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wallet"} {...others} />);
}

export default Component;
