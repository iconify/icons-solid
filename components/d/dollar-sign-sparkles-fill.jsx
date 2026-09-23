import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qctrx8w3m.css';
import '../../css/n/n60_etbbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qctrx8w3m"/><path class="n60_etbbj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:dollar-sign-sparkles-fill"} {...others} />);
}

export default Component;
