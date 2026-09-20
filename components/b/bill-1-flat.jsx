import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rwz24hlco.css';
import '../../css/q/qu_vbrbhy.css';
import '../../css/q/q9rae6tyk.css';
import '../../css/d/dc-o_gbeo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="rwz24hlco"/><path class="qu_vbrbhy"/><path class="q9rae6tyk"/><path clip-rule="evenodd" class="dc-o_gbeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bill-1-flat"} {...others} />);
}

export default Component;
