import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ce5r_0b0n.css';
import '../../css/p/p1u_h8b7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ce5r_0b0n"/><circle class="p1u_h8b7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mouse-right"} {...others} />);
}

export default Component;
