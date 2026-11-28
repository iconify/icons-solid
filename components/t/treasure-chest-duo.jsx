import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkxqnt3lh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gtx1_6bic.css';
import '../../css/o/oaid0l9ds.css';
import '../../css/u/u9sticxvs.css';
import '../../css/t/t2t2rdswm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rkxqnt3lh secondary"/><g class="dt0cm9dhy primary"><path class="gtx1_6bic"/><path class="oaid0l9ds"/><path class="u9sticxvs"/><path class="t2t2rdswm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:treasure-chest-duo"} {...others} />);
}

export default Component;
