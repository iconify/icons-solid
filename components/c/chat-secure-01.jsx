import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/ja21kgjlx.css';
import '../../css/m/mh5hhwcdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ja21kgjlx"/><path class="mh5hhwcdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-secure-01"} {...others} />);
}

export default Component;
