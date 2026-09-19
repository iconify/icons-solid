import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/j/je6eo1bha.css';
import '../../css/v/v8dqwh07n.css';
import '../../css/r/rlqaysbnj.css';
import '../../css/n/nsmor3ztm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="je6eo1bha"/><path class="v8dqwh07n"/><path class="rlqaysbnj"/><path class="nsmor3ztm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:doc-success"} {...others} />);
}

export default Component;
