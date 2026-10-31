import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/n7w8jr3tw.css';
import '../../css/t/te20r1b2e.css';
import '../../css/p/pvr37ibrk.css';
import '../../css/w/w85cbuejr.css';
import '../../css/z/z6t3gwl7u.css';
import '../../css/a/aby0nnqiv.css';
import '../../css/s/sxkxlzych.css';
import '../../css/a/aw5_ycccc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="n7w8jr3tw"/><path class="te20r1b2e"/><path class="pvr37ibrk"/><path class="w85cbuejr wm-shine"/><path class="wm-k z6t3gwl7u"/><path class="aby0nnqiv wm-a"/><path class="sxkxlzych"/><path class="aw5_ycccc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:ambulance"} {...others} />);
}

export default Component;
