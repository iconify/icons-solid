import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qccp1j4ha.css';
import '../../css/a/a60ldi4_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qccp1j4ha"/><path class="a60ldi4_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-2"} {...others} />);
}

export default Component;
