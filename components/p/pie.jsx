import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gfq0n0blt.css';
import '../../css/i/ik_68s79r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gfq0n0blt"/><path class="ik_68s79r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:pie"} {...others} />);
}

export default Component;
