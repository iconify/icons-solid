import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/q/qczo-_bgo.css';
import '../../css/f/fhm5o0rol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><path class="qczo-_bgo"/><path class="fhm5o0rol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chat-duotone-line"} {...others} />);
}

export default Component;
