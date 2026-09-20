import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kp8nirbra.css';
import '../../css/l/lff0dx0pw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kp8nirbra"/><rect class="lff0dx0pw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mails"} {...others} />);
}

export default Component;
