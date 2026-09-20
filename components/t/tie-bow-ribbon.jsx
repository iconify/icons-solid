import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n33cerbud.css';
import '../../css/q/qu8gtwbob.css';
import '../../css/c/c19kre20f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n33cerbud"/><path class="qu8gtwbob"/><path class="c19kre20f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:tie-bow-ribbon"} {...others} />);
}

export default Component;
