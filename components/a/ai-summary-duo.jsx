import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub0_xdb6u.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kfp3c8bsz.css';
import '../../css/c/ct5w8kbba.css';
import '../../css/t/tkrpcdone.css';
import '../../css/f/flirnro9m.css';
import '../../css/v/v9m1ybcbc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary ub0_xdb6u"/><g class="dt0cm9dhy primary"><path class="kfp3c8bsz"/><path class="ct5w8kbba"/><path class="tkrpcdone"/><path class="flirnro9m"/><path class="v9m1ybcbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ai-summary-duo"} {...others} />);
}

export default Component;
