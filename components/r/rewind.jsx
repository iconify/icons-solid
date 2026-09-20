import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fcir56bce.css';
import '../../css/q/qnarlikjw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fcir56bce"/><path class="qnarlikjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:rewind"} {...others} />);
}

export default Component;
