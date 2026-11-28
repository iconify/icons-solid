import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/th4c8l_nb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/da92j5b5b.css';
import '../../css/q/qsgyigbzj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary th4c8l_nb"/><g class="dt0cm9dhy primary"><path class="da92j5b5b"/><path class="qsgyigbzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-heart-duo"} {...others} />);
}

export default Component;
