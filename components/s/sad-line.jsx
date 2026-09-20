import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmizg-b1r.css';
import '../../css/j/jzwe16sbd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mmizg-b1r"/><path class="jzwe16sbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sad-line"} {...others} />);
}

export default Component;
