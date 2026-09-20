import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kjr9bcd_h.css';
import '../../css/n/n_6ff7kly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kjr9bcd_h"/><path class="n_6ff7kly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:redo-2"} {...others} />);
}

export default Component;
