import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q8m4aelen.css';
import '../../css/i/isi2h7q2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q8m4aelen"/><path class="isi2h7q2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:bee"} {...others} />);
}

export default Component;
