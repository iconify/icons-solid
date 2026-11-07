import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aa_n4rjmb.css';
import '../../css/m/m99yuxjsm.css';
import '../../css/n/n8llc_q5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="aa_n4rjmb"/><path class="m99yuxjsm"/><path class="n8llc_q5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-broken"} {...others} />);
}

export default Component;
