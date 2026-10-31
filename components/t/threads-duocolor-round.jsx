import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xdk0a2pfa.css';
import '../../css/s/sj2qpk-ph.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xdk0a2pfa"/><path class="sj2qpk-ph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:threads-duocolor-round"} {...others} />);
}

export default Component;
