import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qcp732bgp.css';
import '../../css/x/x4f_4xb_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qcp732bgp"/><path class="x4f_4xb_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:save-plus"} {...others} />);
}

export default Component;
