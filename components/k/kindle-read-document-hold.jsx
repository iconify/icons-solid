import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/drn3kt_vz.css';
import '../../css/r/rbjgqx-hd.css';
import '../../css/u/uct6h-1kp.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="drn3kt_vz"/><path class="rbjgqx-hd"/><path class="uct6h-1kp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:kindle-read-document-hold"} {...others} />);
}

export default Component;
