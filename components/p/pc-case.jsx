import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kk6vprbmx.css';
import '../../css/w/w9tadwb6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="kk6vprbmx"/><path class="w9tadwb6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:pc-case"} {...others} />);
}

export default Component;
