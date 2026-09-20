import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gfviasbeq.css';
import '../../css/q/q3lg1eiiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gfviasbeq"/><path class="q3lg1eiiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:message-circle-check"} {...others} />);
}

export default Component;
