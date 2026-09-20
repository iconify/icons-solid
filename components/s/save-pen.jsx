import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d9l0okfpx.css';
import '../../css/q/qo-ldpbce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d9l0okfpx"/><path class="qo-ldpbce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:save-pen"} {...others} />);
}

export default Component;
