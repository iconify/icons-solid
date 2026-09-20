import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3a39im_l.css';
import '../../css/t/tp_oyib9q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c3a39im_l"/><path class="tp_oyib9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:trello-board-line"} {...others} />);
}

export default Component;
