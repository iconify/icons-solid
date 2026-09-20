import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l8ujfflzo.css';
import '../../css/y/ytamnattm.css';
import '../../css/e/emqs3cc7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="l8ujfflzo"/><path class="ytamnattm"/><path class="emqs3cc7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:picture-double-landscape"} {...others} />);
}

export default Component;
