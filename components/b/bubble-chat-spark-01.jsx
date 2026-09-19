import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b1skjm25j.css';
import '../../css/s/sug05pb5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b1skjm25j"/><path class="sug05pb5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bubble-chat-spark-01"} {...others} />);
}

export default Component;
