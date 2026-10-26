import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/z/zn1y11bwk.css';
import '../../css/f/fgs250bqb.css';
import '../../css/x/x2a0rsbin.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="zn1y11bwk"/><path class="fgs250bqb"/><path class="x2a0rsbin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:witch-hat"} {...others} />);
}

export default Component;
