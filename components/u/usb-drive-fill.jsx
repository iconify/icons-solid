import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w23_kmrec.css';
import '../../css/p/p4pqz_bvw.css';
import '../../css/z/zna1w6bmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w23_kmrec"/><path class="p4pqz_bvw"/><path class="zna1w6bmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:usb-drive-fill"} {...others} />);
}

export default Component;
