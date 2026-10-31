import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p7cyu9biu.css';
import '../../css/q/qravvf8eg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p7cyu9biu"/><path class="qravvf8eg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:folder-download-corner-duocolor-round"} {...others} />);
}

export default Component;
