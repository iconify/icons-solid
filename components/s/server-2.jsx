import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m9h8nyf8o.css';
import '../../css/g/gxvallb2k.css';
import '../../css/n/nohfypbva.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="m9h8nyf8o"/><path class="gxvallb2k"/><path class="nohfypbva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:server-2"} {...others} />);
}

export default Component;
