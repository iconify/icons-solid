import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t_ev7s-sv.css';
import '../../css/p/py_4k92_q.css';
import '../../css/q/qa3awcbml.css';
import '../../css/g/g32u12b2q.css';
import '../../css/m/m6a-39ccf.css';

const viewBox = {"width":24,"height":24};
const content = `<g transform="translate(-2.4 -2)" class="bi12bsetm"><path class="t_ev7s-sv"/><circle class="py_4k92_q"/><circle class="qa3awcbml"/><circle class="g32u12b2q"/><path class="m6a-39ccf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:real-world-insights"} {...others} />);
}

export default Component;
