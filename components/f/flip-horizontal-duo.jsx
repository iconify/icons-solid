import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v84_akkuy.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uijgoup2v.css';
import '../../css/i/i1u2bqb_t.css';
import '../../css/r/rqwm_hbww.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary v84_akkuy"/><g class="dt0cm9dhy primary"><path class="uijgoup2v"/><path class="i1u2bqb_t"/><path class="rqwm_hbww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flip-horizontal-duo"} {...others} />);
}

export default Component;
