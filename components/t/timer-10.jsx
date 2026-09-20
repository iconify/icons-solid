import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2v5o1kkk.css';
import '../../css/i/ii2opmssb.css';
import '../../css/j/j0uhodmyp.css';
import '../../css/y/yqrx76bpz.css';
import '../../css/n/nqm4jhais.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v2v5o1kkk"/><path class="ii2opmssb"/><path class="j0uhodmyp"/><path class="yqrx76bpz"/><path class="nqm4jhais"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:timer-10"} {...others} />);
}

export default Component;
