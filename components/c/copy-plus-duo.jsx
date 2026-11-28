import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i24p_w3hn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ib4ikg6hx.css';
import '../../css/e/ekk1d4bph.css';
import '../../css/e/exqib9bci.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i24p_w3hn secondary"/><g class="dt0cm9dhy primary"><path class="ib4ikg6hx"/><path class="ekk1d4bph"/><path class="exqib9bci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:copy-plus-duo"} {...others} />);
}

export default Component;
