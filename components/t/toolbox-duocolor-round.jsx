import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o5_vsyb1f.css';
import '../../css/l/lltdpne0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o5_vsyb1f"/><path class="lltdpne0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:toolbox-duocolor-round"} {...others} />);
}

export default Component;
