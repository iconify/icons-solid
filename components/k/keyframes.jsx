import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aer9-85le.css';
import '../../css/q/qg93mcc7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="aer9-85le"/><path class="qg93mcc7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:keyframes"} {...others} />);
}

export default Component;
