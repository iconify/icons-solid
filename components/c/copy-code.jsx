import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-73oypxc.css';
import '../../css/t/tm0ea5ulw.css';
import '../../css/r/r_i1xrbip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s-73oypxc"/><path class="tm0ea5ulw"/><path class="r_i1xrbip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:copy-code"} {...others} />);
}

export default Component;
