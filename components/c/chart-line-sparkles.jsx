import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mh46q7vgt.css';
import '../../css/g/gdd9cvbpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mh46q7vgt"/><path class="gdd9cvbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-line-sparkles"} {...others} />);
}

export default Component;
