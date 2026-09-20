import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a4rtf3bmo.css';
import '../../css/p/ptvu1u_4n.css';
import '../../css/e/ey8qu_bww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a4rtf3bmo"/><circle class="ptvu1u_4n"/><path class="ey8qu_bww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:flower-2"} {...others} />);
}

export default Component;
