import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g5h1v8b-m.css';
import '../../css/n/nxc97uq5g.css';
import '../../css/b/bny-iu66i.css';
import '../../css/v/vkezfyhjx.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="g5h1v8b-m"/><path class="nxc97uq5g"/><path class="bny-iu66i"/><path class="vkezfyhjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:task-clipboard-check"} {...others} />);
}

export default Component;
