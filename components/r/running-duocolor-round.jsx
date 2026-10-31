import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pjc7nwbke.css';
import '../../css/l/le3mv3bds.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pjc7nwbke"/><path class="le3mv3bds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:running-duocolor-round"} {...others} />);
}

export default Component;
