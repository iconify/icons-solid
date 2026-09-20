import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b2vlpabdt.css';
import '../../css/o/oi7bi6bzv.css';
import '../../css/c/cc61p4bvk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="b2vlpabdt"/><path class="oi7bi6bzv"/><path class="cc61p4bvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:multimedia-controls-single-track"} {...others} />);
}

export default Component;
