import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tawo86brd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lb5tddpfm.css';
import '../../css/f/f_1d46bly.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary tawo86brd"/><g class="dt0cm9dhy primary"><path class="lb5tddpfm"/><path class="f_1d46bly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:arrow-big-left-dash-duo"} {...others} />);
}

export default Component;
