import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wmbkhvb4e.css';
import '../../css/k/k00ftcwon.css';
import '../../css/r/rlvsr9brm.css';
import '../../css/h/hejv0bvlo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wmbkhvb4e"/><path class="k00ftcwon"/><path class="rlvsr9brm"/><path class="hejv0bvlo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-resize"} {...others} />);
}

export default Component;
