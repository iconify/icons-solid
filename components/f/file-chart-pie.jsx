import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ah1iiubfc.css';
import '../../css/i/i6tcmibtw.css';
import '../../css/r/rzb8izb8n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ah1iiubfc"/><path class="i6tcmibtw"/><path class="rzb8izb8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-chart-pie"} {...others} />);
}

export default Component;
