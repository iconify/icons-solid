import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nta9uvt4z.css';
import '../../css/e/e9j53gb9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nta9uvt4z"/><path class="e9j53gb9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ship-duocolor-round"} {...others} />);
}

export default Component;
