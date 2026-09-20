import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x3o7b8xqv.css';
import '../../css/d/duazxfbrd.css';
import '../../css/a/a2zd00mlc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="x3o7b8xqv"/><path class="duazxfbrd"/><path class="a2zd00mlc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:drawer-download"} {...others} />);
}

export default Component;
