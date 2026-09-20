import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mxrs_e7hy.css';
import '../../css/d/d72986bro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mxrs_e7hy"/><path class="d72986bro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:corner-down-right-double"} {...others} />);
}

export default Component;
