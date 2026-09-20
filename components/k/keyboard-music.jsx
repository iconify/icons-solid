import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i_kpawtqq.css';
import '../../css/q/qr40wtb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="i_kpawtqq"/><path class="qr40wtb8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:keyboard-music"} {...others} />);
}

export default Component;
