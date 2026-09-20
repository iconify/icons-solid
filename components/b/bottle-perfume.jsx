import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iv9uiublq.css';
import '../../css/z/zkq8hsb7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iv9uiublq"/><rect class="zkq8hsb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:bottle-perfume"} {...others} />);
}

export default Component;
