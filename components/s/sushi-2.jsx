import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iv4d3bbfk.css';
import '../../css/i/is65izymr.css';
import '../../css/a/awy7qf-1l.css';
import '../../css/w/wpafmib7k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iv4d3bbfk"/><path class="is65izymr"/><path class="awy7qf-1l"/><path class="wpafmib7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:sushi-2"} {...others} />);
}

export default Component;
