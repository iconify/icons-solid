import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iojc3c5mq.css';
import '../../css/h/h-mv3pyqd.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="iojc3c5mq"/><path class="h-mv3pyqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:gold-medal"} {...others} />);
}

export default Component;
