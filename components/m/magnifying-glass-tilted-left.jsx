import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2ek3m0rf.css';
import '../../css/s/sjr3dwtwk.css';
import '../../css/j/jtc7x7bdh.css';
import '../../css/d/dfy5bkbed.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/a/a7rd_u49l.css';
import '../../css/t/t4nhx5baw.css';
import '../../css/j/j6fzghb0m.css';

const viewBox = {"width":72,"height":72};
const content = `<circle transform="rotate(-36.813 29.584 24.83)" class="c2ek3m0rf"/><path class="sjr3dwtwk"/><path class="jtc7x7bdh"/><path class="dfy5bkbed"/><g class="ij2x_72vy"><circle transform="rotate(-36.813 29.584 24.83)" class="a7rd_u49l"/><circle transform="rotate(-36.813 29.584 24.83)" class="t4nhx5baw"/><path class="j6fzghb0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:magnifying-glass-tilted-left"} {...others} />);
}

export default Component;
