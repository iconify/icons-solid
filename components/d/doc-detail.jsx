import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/l/llkd082ke.css';
import '../../css/v/v8dqwh07n.css';
import '../../css/r/rlqaysbnj.css';
import '../../css/g/g2xvj1bnz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="llkd082ke"/><path class="v8dqwh07n"/><path class="rlqaysbnj"/><rect class="g2xvj1bnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:doc-detail"} {...others} />);
}

export default Component;
