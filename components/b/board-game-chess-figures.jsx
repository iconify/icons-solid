import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/djdh_3b6t.css';
import '../../css/o/ocbknsu8a.css';
import '../../css/f/fuwf3cc6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="djdh_3b6t"/><path class="ocbknsu8a"/><path class="fuwf3cc6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:board-game-chess-figures"} {...others} />);
}

export default Component;
