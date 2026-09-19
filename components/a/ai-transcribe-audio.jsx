import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/otkax0g8g.css';
import '../../css/b/b3jw1wbpk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="otkax0g8g"/><path class="b3jw1wbpk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-transcribe-audio"} {...others} />);
}

export default Component;
