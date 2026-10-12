import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/luv3m6b_d.css';
import '../../css/g/gdd6glrta.css';
import '../../css/w/wxfi02bkr.css';
import '../../css/v/v6-odob5a.css';
import '../../css/f/fwhfu2b1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="luv3m6b_d"/><path class="gdd6glrta"/><path class="wxfi02bkr"/><path class="v6-odob5a"/><path class="fwhfu2b1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:wallet-minus"} {...others} />);
}

export default Component;
