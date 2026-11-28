import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgqcvfbsc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wy271hbfy.css';
import '../../css/e/eqe-4ob7x.css';
import '../../css/t/tsrrv4k8w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jgqcvfbsc secondary"/><g class="dt0cm9dhy primary"><path class="wy271hbfy"/><path class="eqe-4ob7x"/><path class="tsrrv4k8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pill-bottle-duo"} {...others} />);
}

export default Component;
