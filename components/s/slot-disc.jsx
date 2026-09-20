import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/azffq-zck.css';
import '../../css/a/axwbscqba.css';
import '../../css/y/yo9vw7b0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="azffq-zck"/><circle class="axwbscqba"/><path class="yo9vw7b0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:slot-disc"} {...others} />);
}

export default Component;
