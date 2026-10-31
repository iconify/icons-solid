import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/prry2blhe.css';
import '../../css/f/fk8tujbas.css';
import '../../css/n/nu79pab_i.css';
import '../../css/s/ssh_upsag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="prry2blhe wm-shadow"/><path class="fk8tujbas wm-shadow"/><path class="nu79pab_i"/><path class="ssh_upsag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bluetooth"} {...others} />);
}

export default Component;
