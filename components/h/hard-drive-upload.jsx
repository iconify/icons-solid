import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gyq9bw-zf.css';
import '../../css/m/m6a3e3btz.css';
import '../../css/n/nak-4qbbw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gyq9bw-zf"/><rect class="m6a3e3btz"/><path class="nak-4qbbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hard-drive-upload"} {...others} />);
}

export default Component;
