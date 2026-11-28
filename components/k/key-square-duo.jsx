import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqh2lk27i.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k07fsnbtf.css';
import '../../css/q/qcwlp3baj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cqh2lk27i secondary"/><g class="dt0cm9dhy primary"><path class="k07fsnbtf"/><path class="qcwlp3baj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:key-square-duo"} {...others} />);
}

export default Component;
