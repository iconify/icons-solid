import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ee9txibtn.css';
import '../../css/h/htxsnohth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ee9txibtn"/><path class="htxsnohth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:microphone"} {...others} />);
}

export default Component;
