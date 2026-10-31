import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sxk1gpbzj.css';
import '../../css/q/q20xhrbdl.css';
import '../../css/b/bqfneeboe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="sxk1gpbzj"/><path class="q20xhrbdl wm-shine"/><path class="bqfneeboe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:layout-grid"} {...others} />);
}

export default Component;
