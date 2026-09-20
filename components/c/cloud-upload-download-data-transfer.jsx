import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sin-594nf.css';
import '../../css/k/kpxo4sbwd.css';
import '../../css/e/e2zns_z6f.css';
import '../../css/j/jobm8nbcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sin-594nf"/><path class="kpxo4sbwd"/><path class="e2zns_z6f"/><path class="jobm8nbcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cloud-upload-download-data-transfer"} {...others} />);
}

export default Component;
