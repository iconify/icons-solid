import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij9jytbwz.css';
import '../../css/r/rk9vncbpu.css';
import '../../css/w/wswcn9beg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ij9jytbwz"/><path class="rk9vncbpu"/><path class="wswcn9beg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:conversation-question-warning-3"} {...others} />);
}

export default Component;
