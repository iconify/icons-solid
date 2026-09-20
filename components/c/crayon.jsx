import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/md5fkyy9p.css';
import '../../css/w/ws35vdbar.css';
import '../../css/q/qcxo374xz.css';
import '../../css/o/ouybwccsi.css';
import '../../css/a/abxrhfy5t.css';
import '../../css/z/zmkur8bnx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="md5fkyy9p"/><path class="ws35vdbar"/><path class="qcxo374xz"/><g class="ouybwccsi"><path class="abxrhfy5t"/><path class="zmkur8bnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:crayon"} {...others} />);
}

export default Component;
