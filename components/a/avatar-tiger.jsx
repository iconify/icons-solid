import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/guip_kb9k.css';
import '../../css/a/avzr3zdfo.css';
import '../../css/g/g5qm_rbmh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="guip_kb9k"/><path class="avzr3zdfo"/><path class="g5qm_rbmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:avatar-tiger"} {...others} />);
}

export default Component;
