import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kawrq6d1m.css';
import '../../css/m/mjvs1cblk.css';
import '../../css/i/i81te_6rg.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/q/qpu-t5qeu.css';
import '../../css/d/defjnrbmc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="kawrq6d1m"/><path class="mjvs1cblk"/><path class="i81te_6rg"/><g class="ij2x_72vy"><path class="qpu-t5qeu"/><path class="defjnrbmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:locked"} {...others} />);
}

export default Component;
