import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/ajpxppb9q.css';
import '../../css/i/i07g9cbiy.css';
import '../../css/r/r3066ccja.css';
import '../../css/a/ag-ibrbsc.css';
import '../../css/q/qmlthkbhy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ajpxppb9q"/><path class="i07g9cbiy"/><path class="r3066ccja wm-shine"/><path class="ag-ibrbsc wm-k"/><path class="qmlthkbhy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:radar"} {...others} />);
}

export default Component;
