import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/peg-w5qff.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v_p127tlh.css';
import '../../css/n/ng8mcwblf.css';
import '../../css/f/fny23pt9r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="peg-w5qff secondary"/><g class="dt0cm9dhy primary"><path class="v_p127tlh"/><path class="ng8mcwblf"/><path class="fny23pt9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-rainbow-duo"} {...others} />);
}

export default Component;
