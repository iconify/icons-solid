import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/q/qohfgdb0o.css';
import '../../css/j/jseg8life.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="qohfgdb0o"/><path class="jseg8life"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:live-streaming-03"} {...others} />);
}

export default Component;
