import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mbjrqb-aq.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/s/s-ho2qb0i.css';
import '../../css/e/e_2bay6_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mbjrqb-aq"/><g class="mc2zb0bvp"><path class="s-ho2qb0i"/><path class="e_2bay6_a"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:documents-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
