import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zvsi7hbga.css';
import '../../css/t/tpm5z5nfs.css';
import '../../css/p/p60cc0byq.css';
import '../../css/n/nrd2wggzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zvsi7hbga"/><path class="tpm5z5nfs"/><rect class="p60cc0byq"/><path class="nrd2wggzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:server-duotone"} {...others} />);
}

export default Component;
