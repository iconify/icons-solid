import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v59y8pkrp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d0rfbr16h.css';
import '../../css/u/ub0c85bqe.css';
import '../../css/u/uwdjx6w4x.css';
import '../../css/k/k2eiih0kx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary v59y8pkrp"/><g class="dt0cm9dhy primary"><path class="d0rfbr16h"/><path class="ub0c85bqe"/><path class="uwdjx6w4x"/><path class="k2eiih0kx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:lungs-duo"} {...others} />);
}

export default Component;
