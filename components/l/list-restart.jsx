import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gizt081fz.css';
import '../../css/f/fntzryfta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gizt081fz"/><path class="fntzryfta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:list-restart"} {...others} />);
}

export default Component;
