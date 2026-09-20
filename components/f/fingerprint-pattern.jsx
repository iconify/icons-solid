import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/somcr4dof.css';
import '../../css/y/ythwd7b1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="somcr4dof"/><path class="ythwd7b1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:fingerprint-pattern"} {...others} />);
}

export default Component;
