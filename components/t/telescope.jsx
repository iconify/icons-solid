import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt8euk94d.css';
import '../../css/m/m3ld84doc.css';
import '../../css/d/dcwrwbboq.css';
import '../../css/h/hrrl0svrj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mt8euk94d wm-a"/><path class="m3ld84doc wm-k"/><path class="dcwrwbboq wm-k"/><path class="hrrl0svrj wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:telescope"} {...others} />);
}

export default Component;
