import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qk-e_esvl.css';
import '../../css/l/lg37rfb8x.css';
import '../../css/m/m7io8nc5k.css';
import '../../css/x/x15y8e2er.css';
import '../../css/z/zegbqci7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qk-e_esvl"/><path class="lg37rfb8x"/><path class="m7io8nc5k"/><path class="x15y8e2er"/><path class="zegbqci7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tornado-small-outline"} {...others} />);
}

export default Component;
