import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/tuk6cqr0l.css';
import '../../css/j/js_oh4-0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="tuk6cqr0l"/><path class="js_oh4-0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:file-code"} {...others} />);
}

export default Component;
