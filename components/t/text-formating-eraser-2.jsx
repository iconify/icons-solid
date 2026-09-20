import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/ne9whfbid.css';
import '../../css/f/fnzkjf6tn.css';
import '../../css/t/tv4babcjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ne9whfbid"/><path class="fnzkjf6tn"/><path class="tv4babcjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:text-formating-eraser-2"} {...others} />);
}

export default Component;
