import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ey8w85byk.css';
import '../../css/q/qp-w3sb_i.css';
import '../../css/i/i-xwssvzh.css';
import '../../css/e/evx4dxbpu.css';
import '../../css/q/qf6pz8brm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ey8w85byk"/><path class="qp-w3sb_i"/><path class="i-xwssvzh"/><path class="evx4dxbpu"/><path class="qf6pz8brm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-open-play-bold-duotone"} {...others} />);
}

export default Component;
