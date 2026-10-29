import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jzg8wibto.css';
import '../../css/n/nicx5qbaa.css';
import '../../css/g/gsir-ngtt.css';
import '../../css/m/mza_43bcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jzg8wibto"/><path class="nicx5qbaa wm-a"/><path class="gsir-ngtt wm-k"/><path class="mza_43bcq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:badge-info-sketch"} {...others} />);
}

export default Component;
