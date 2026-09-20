import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nz1wz29-n.css';
import '../../css/u/uwpdhwbvk.css';
import '../../css/w/wh2bzxdhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nz1wz29-n"/><path class="uwpdhwbvk"/><circle class="wh2bzxdhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:trailer"} {...others} />);
}

export default Component;
