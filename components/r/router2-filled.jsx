import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ics0zif6q.css';
import '../../css/o/op6-m42gl.css';
import '../../css/o/oc1avbb4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ics0zif6q"/><path clip-rule="evenodd" class="op6-m42gl"/><path class="oc1avbb4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:router2-filled"} {...others} />);
}

export default Component;
