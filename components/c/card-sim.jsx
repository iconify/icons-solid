import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rdmvcdwyq.css';
import '../../css/j/j1e9bv-lb.css';
import '../../css/d/d7p62aceu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rdmvcdwyq"/><rect class="j1e9bv-lb"/><path class="d7p62aceu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:card-sim"} {...others} />);
}

export default Component;
