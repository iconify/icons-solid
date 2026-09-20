import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d6o5rbbio.css';
import '../../css/p/p4x4mvb5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d6o5rbbio"/><path class="p4x4mvb5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:cow-head"} {...others} />);
}

export default Component;
