import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pu801gbmo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/znd87nbay.css';
import '../../css/v/vygixqgec.css';
import '../../css/t/th6vuccay.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pu801gbmo secondary"/><g class="dt0cm9dhy primary"><path class="znd87nbay"/><path class="vygixqgec"/><path class="th6vuccay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:file-stack-duo"} {...others} />);
}

export default Component;
