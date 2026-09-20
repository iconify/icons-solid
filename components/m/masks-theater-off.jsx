import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n8-ke9u1a.css';
import '../../css/j/jddwsyhuu.css';
import '../../css/a/amvt50b9s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n8-ke9u1a"/><path class="jddwsyhuu"/><path class="amvt50b9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:masks-theater-off"} {...others} />);
}

export default Component;
