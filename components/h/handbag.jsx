import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ldyya2-mi.css';
import '../../css/q/qesonrhoc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ldyya2-mi"/><path class="qesonrhoc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:handbag"} {...others} />);
}

export default Component;
