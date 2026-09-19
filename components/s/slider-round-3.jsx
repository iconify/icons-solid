import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zxkzwmu0w.css';
import '../../css/r/rfucequyu.css';
import '../../css/q/qor4xqb1b.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="zxkzwmu0w"/><path class="rfucequyu"/><ellipse class="qor4xqb1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:slider-round-3"} {...others} />);
}

export default Component;
