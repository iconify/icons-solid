import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nibs_lbmi.css';
import '../../css/a/as15v3bwn.css';
import '../../css/q/qrc405bkt.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="nibs_lbmi"><path class="as15v3bwn"/><path class="qrc405bkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:go-wordmark"} {...others} />);
}

export default Component;
