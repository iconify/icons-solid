import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb7lpq_wf.css';
import '../../css/q/qgr7uybef.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/r/rkxs0hbwj.css';
import '../../css/o/o0pfhwbdc.css';
import '../../css/o/o6ex67b9j.css';
import '../../css/o/op7hs8ybg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jb7lpq_wf"/><path clip-rule="evenodd" class="qgr7uybef"/><g class="xtpeb-edw"><path class="rkxs0hbwj"/><path class="o0pfhwbdc"/><path class="o6ex67b9j"/><path class="op7hs8ybg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skateboarding-round-bold-duotone"} {...others} />);
}

export default Component;
