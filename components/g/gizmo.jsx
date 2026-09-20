import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bt9hnzshg.css';
import '../../css/q/q_txgwbtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bt9hnzshg"/><path class="q_txgwbtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:gizmo"} {...others} />);
}

export default Component;
