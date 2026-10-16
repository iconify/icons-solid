import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ch6ii7bvn.css';
import '../../css/f/fbvqzbcty.css';
import '../../css/f/f2ry08bba.css';
import '../../css/x/x_mus1b9z.css';
import '../../css/f/fd3710bmy.css';
import '../../css/l/l0n_7k7ad.css';
import '../../css/x/xeozkhb7t.css';
import '../../css/m/mzu7lwbsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ch6ii7bvn"/><path class="fbvqzbcty"/><path class="f2ry08bba"/><path class="x_mus1b9z"/><path class="fd3710bmy"/><path class="l0n_7k7ad"/><path class="xeozkhb7t"/><path class="mzu7lwbsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:balls"} {...others} />);
}

export default Component;
