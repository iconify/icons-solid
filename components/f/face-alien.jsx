import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j64hijs9c.css';
import '../../css/w/w_b0q1jfm.css';
import '../../css/y/yw4qdubuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j64hijs9c"/><path class="w_b0q1jfm"/><path class="yw4qdubuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:face-alien"} {...others} />);
}

export default Component;
