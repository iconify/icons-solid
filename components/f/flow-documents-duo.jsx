import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/opy0ucb6g.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qnt4o0b9x.css';
import '../../css/y/y63-mibag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="opy0ucb6g secondary"/><g class="dt0cm9dhy primary"><path class="qnt4o0b9x"/><path class="y63-mibag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flow-documents-duo"} {...others} />);
}

export default Component;
