import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy-g8lbjc.css';
import '../../css/c/c_jcusmko.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jy-g8lbjc"/><path class="c_jcusmko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:baby-line"} {...others} />);
}

export default Component;
