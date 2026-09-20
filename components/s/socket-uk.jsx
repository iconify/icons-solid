import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w96sr1g7k.css';
import '../../css/z/z375kibfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="w96sr1g7k"/><path class="z375kibfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:socket-uk"} {...others} />);
}

export default Component;
