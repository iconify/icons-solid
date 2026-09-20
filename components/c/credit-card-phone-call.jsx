import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cuts94bpt.css';
import '../../css/r/rv7ziu97u.css';
import '../../css/e/ezfkwpbnf.css';
import '../../css/v/vk5jjex7q.css';
import '../../css/i/ib8ttcbir.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="cuts94bpt"/><path class="rv7ziu97u"/><path class="ezfkwpbnf"/><path class="vk5jjex7q"/><path class="ib8ttcbir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:credit-card-phone-call"} {...others} />);
}

export default Component;
