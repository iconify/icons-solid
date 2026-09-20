import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kdqvh6bbb.css';
import '../../css/v/v7fyv2tmw.css';
import '../../css/e/ew1tkbrtr.css';
import '../../css/g/gn_t_acog.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="kdqvh6bbb"/><path class="v7fyv2tmw"/><path class="ew1tkbrtr"/><path class="gn_t_acog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:file-code-share-1"} {...others} />);
}

export default Component;
