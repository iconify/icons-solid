import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xei1asblk.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j_ufjpcsf.css';
import '../../css/p/pxwz2pbfo.css';
import '../../css/y/ycqdpsb9d.css';
import '../../css/k/kjrh62jun.css';
import '../../css/c/crqlicc0h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary xei1asblk"/><g class="dt0cm9dhy primary"><path class="j_ufjpcsf"/><path class="pxwz2pbfo"/><path class="ycqdpsb9d"/><path class="kjrh62jun"/><path class="crqlicc0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:lotus-duo"} {...others} />);
}

export default Component;
