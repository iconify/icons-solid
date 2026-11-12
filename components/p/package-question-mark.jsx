import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gd90cib8o.css';
import '../../css/o/o88qk5-dk.css';
import '../../css/h/h7ezhxj7s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gd90cib8o"/><path class="o88qk5-dk"/><path class="h7ezhxj7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:package-question-mark"} {...others} />);
}

export default Component;
