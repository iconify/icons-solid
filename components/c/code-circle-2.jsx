import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hc0bwix8q.css';
import '../../css/v/vl9e-cc6x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hc0bwix8q"/><path class="vl9e-cc6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:code-circle-2"} {...others} />);
}

export default Component;
