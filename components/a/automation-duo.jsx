import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0fkrdwdb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ll59ytbdg.css';
import '../../css/r/r7w21kpsx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o0fkrdwdb secondary"/><g class="dt0cm9dhy primary"><path class="ll59ytbdg"/><path class="r7w21kpsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:automation-duo"} {...others} />);
}

export default Component;
