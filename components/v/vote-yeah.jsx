import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwunyifqp.css';
import '../../css/f/ftleakbxq.css';
import '../../css/t/tvj-li2ou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xwunyifqp"/><path class="ftleakbxq"/><path class="tvj-li2ou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:vote-yeah"} {...others} />);
}

export default Component;
