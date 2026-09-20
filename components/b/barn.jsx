import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dwemk-b1r.css';
import '../../css/c/cps-uerrm.css';
import '../../css/h/h8pd_ubye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dwemk-b1r"/><path class="cps-uerrm"/><path class="h8pd_ubye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:barn"} {...others} />);
}

export default Component;
