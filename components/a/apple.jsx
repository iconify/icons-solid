import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wj1sciq_w.css';
import '../../css/m/maav1jb2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wj1sciq_w"/><path class="maav1jb2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:apple"} {...others} />);
}

export default Component;
