import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qctrx8w3m.css';
import '../../css/l/lxr-c948j.css';
import '../../css/g/gug740nnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qctrx8w3m"/><path class="lxr-c948j"/><path class="gug740nnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:dollar-sign-sparkles-two-tone"} {...others} />);
}

export default Component;
