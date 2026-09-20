import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ix6i1v8-a.css';
import '../../css/p/ptn4d776z.css';
import '../../css/w/w075vybfy.css';
import '../../css/f/fn13rwetu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ix6i1v8-a"/><path class="ptn4d776z"/><path class="w075vybfy"/><path class="fn13rwetu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:shop"} {...others} />);
}

export default Component;
