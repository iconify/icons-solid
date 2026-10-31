import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qb8r96btl.css';
import '../../css/b/bbwbtabok.css';
import '../../css/z/zea7nlbov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qb8r96btl wm-k"/><path class="bbwbtabok wm-a"/><path class="wm-deco zea7nlbov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:list-checks"} {...others} />);
}

export default Component;
