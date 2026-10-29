import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u6413dbpu.css';
import '../../css/q/qxe6hk8gz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u6413dbpu"/><path class="qxe6hk8gz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:door-open"} {...others} />);
}

export default Component;
