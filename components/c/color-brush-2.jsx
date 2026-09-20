import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x---asbnp.css';
import '../../css/k/krrnwbcaq.css';
import '../../css/h/hxtv6eb4e.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="x---asbnp"/><path class="krrnwbcaq"/><path class="hxtv6eb4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:color-brush-2"} {...others} />);
}

export default Component;
