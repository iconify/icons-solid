import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qhnvqbbxo.css';
import '../../css/v/veigkmbdy.css';
import '../../css/g/gapblccgm.css';
import '../../css/d/d-i86qbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qhnvqbbxo"/><path class="veigkmbdy wm-a"/><path class="gapblccgm"/><path class="d-i86qbmd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sparkles-duo"} {...others} />);
}

export default Component;
