import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/szng5p1dm.css';
import '../../css/p/pppnfcb8p.css';
import '../../css/r/rh7qyxbqw.css';
import '../../css/c/cvqxgvx0k.css';
import '../../css/y/yc9yiab5o.css';
import '../../css/c/c9hfnvh0n.css';
import '../../css/s/s-ci5ccof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="szng5p1dm"/><path class="pppnfcb8p"/><path class="rh7qyxbqw wm-shine"/><path class="cvqxgvx0k"/><path class="yc9yiab5o"/><path class="c9hfnvh0n"/><path class="s-ci5ccof wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:power"} {...others} />);
}

export default Component;
