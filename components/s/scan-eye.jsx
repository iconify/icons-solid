import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vf0ja5b4a.css';
import '../../css/d/d-a_qsb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vf0ja5b4a"/><path class="d-a_qsb5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scan-eye"} {...others} />);
}

export default Component;
