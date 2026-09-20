import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zrg4wdisz.css';
import '../../css/m/mtomw1l9y.css';
import '../../css/n/nsz9pcbni.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="zrg4wdisz"/><path class="mtomw1l9y"/><path class="nsz9pcbni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:color-palette"} {...others} />);
}

export default Component;
