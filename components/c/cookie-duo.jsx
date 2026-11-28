import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q15d-ozjb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ed6g4pb3y.css';
import '../../css/k/kxhf0ebkq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q15d-ozjb secondary"/><g class="dt0cm9dhy primary"><path class="ed6g4pb3y"/><path class="kxhf0ebkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cookie-duo"} {...others} />);
}

export default Component;
