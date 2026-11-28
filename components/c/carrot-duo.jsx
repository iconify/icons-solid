import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sj3ugqhvs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ett11-bch.css';
import '../../css/w/ws2q1my1b.css';
import '../../css/h/hjp5ozb1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary sj3ugqhvs"/><g class="dt0cm9dhy primary"><path class="ett11-bch"/><path class="ws2q1my1b"/><path class="hjp5ozb1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:carrot-duo"} {...others} />);
}

export default Component;
