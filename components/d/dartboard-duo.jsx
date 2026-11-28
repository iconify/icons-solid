import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvf4uib1q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yszc66b-y.css';
import '../../css/m/mt7e0acqo.css';
import '../../css/t/t7oaa3cbh.css';
import '../../css/m/mmgaxbcck.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary yvf4uib1q"/><g class="dt0cm9dhy primary"><path class="yszc66b-y"/><path class="mt7e0acqo"/><path class="t7oaa3cbh"/><path class="mmgaxbcck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:dartboard-duo"} {...others} />);
}

export default Component;
