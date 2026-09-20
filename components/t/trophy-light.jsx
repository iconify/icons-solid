import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uajpshzth.css';
import '../../css/g/g2q_fsa1p.css';
import '../../css/u/u8is-4cck.css';
import '../../css/c/csq_7e3ir.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uajpshzth"/><path class="g2q_fsa1p"/><path class="u8is-4cck"/><path class="csq_7e3ir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:trophy-light"} {...others} />);
}

export default Component;
