import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/li-zi3elj.css';
import '../../css/b/bw511z_pe.css';
import '../../css/d/dfnr2jbpz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="li-zi3elj"/><path class="bw511z_pe"/><path class="dfnr2jbpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:credit-card-not-accept"} {...others} />);
}

export default Component;
