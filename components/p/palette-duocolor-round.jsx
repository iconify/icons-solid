import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dqjr7ua5o.css';
import '../../css/l/lg-qqfb-f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dqjr7ua5o"/><path class="lg-qqfb-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:palette-duocolor-round"} {...others} />);
}

export default Component;
